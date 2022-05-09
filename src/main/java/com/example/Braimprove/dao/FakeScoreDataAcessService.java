package com.example.Braimprove.dao;

import com.example.Braimprove.model.Score;
import com.example.Braimprove.dao.ConnectDataBase;

import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.UUID;
import java.util.ArrayList;
import java.util.List;

@Repository("fakeScoreDao")
public class FakeScoreDataAcessService implements ScoreDao {
    Connection connection = ConnectDataBase.conectDb();
    PreparedStatement preparedStatement;
    CallableStatement callableStatement = null;

    @Override
    public List<Score> getAllScore() {
        try{
            List<Score> listScores = new ArrayList<>();
            String select = "call SP_GetListScore";
            preparedStatement = connection.prepareStatement(select);
            ResultSet scoreResponse = preparedStatement.executeQuery(select);
            while (scoreResponse.next()){
                Score score = new Score(Integer.parseInt(scoreResponse.getString("Id")),
                        scoreResponse.getString("NickName"), scoreResponse.getString("Game"),
                        Float.parseFloat(scoreResponse.getString("Score")), scoreResponse.getString("Dificuldade"));
                listScores.add(score);
            }
            return listScores;
        }catch (SQLException e){
            throw new RuntimeException(e);
        }
    }

    private static List<Score> DB = new ArrayList<>();

    @Override
    public int insertScore(String nickname, String game, Float score, String dificuldade) {
        try{
            callableStatement = (CallableStatement) connection.prepareCall("{CALL SP_InsertScore(?,?,?,?)}");
            callableStatement.setString(1, nickname);
            callableStatement.setString(2, game);
            callableStatement.setFloat(3, score);
            callableStatement.setString(4, dificuldade);

            callableStatement.executeUpdate();

            return 1;
        }catch (Exception e) {
            System.out.println(e);

            return 0;
        }
    }

    public String deleteScore(Integer id){
        try{
            callableStatement = (CallableStatement) connection.prepareCall("{CALL SP_DeleteScore(?)}");
            callableStatement.setInt(1, id);

            callableStatement.executeUpdate();

            return "Score deletado";
        }catch (Exception e) {
            System.out.println(e);

            return "O Score não foi deletado";
        }
    }

    @Override
    public int insertScore(Score score) {
        return ScoreDao.super.insertScore(score);
    }
}
