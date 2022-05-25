package com.example.Braimprove.dao;

import com.example.Braimprove.model.Score;

import java.util.List;

public interface ScoreDao {
    List<Score> getAllScore( );

    int insertScore(String nickname, String game, Float score, String dificuldade);

    default String deleteScore(Integer id){
        return deleteScore(id);
    }

    default int insertScore(Score score){
        return insertScore(score.getNickname(), score.getGame(), score.getScore(), score.getDificuldade());
    }
}
