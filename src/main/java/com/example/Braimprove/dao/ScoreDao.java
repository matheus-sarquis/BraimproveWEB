package com.example.Braimprove.dao;

import com.example.Braimprove.model.Score;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

public interface ScoreDao {
    List<Score> getAllScore( );

    int insertScore(String nickname, String game, Float score, String dificuldade);

    default int insertScore(Score score){
        return insertScore(score.getNickname(), score.getGame(), score.getScore(), score.getDificuldade());
    }
}
