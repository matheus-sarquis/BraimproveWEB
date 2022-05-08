package com.example.Braimprove.service;

import com.example.Braimprove.dao.ScoreDao;
import com.example.Braimprove.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreService {
    private final ScoreDao scoreDao;

    public List<Score> listScore(){
        return scoreDao.getAllScore();
    }

    @Autowired
    public ScoreService(@Qualifier("fakeScoreDao") ScoreDao scoreDao) {
        this.scoreDao = scoreDao;
    }
    public int addScore(Score score) {
        return scoreDao.insertScore(score);
    }
}
