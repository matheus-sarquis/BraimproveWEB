package com.example.Braimprove.service;

import com.example.Braimprove.dao.ScoreDao;
import com.example.Braimprove.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Service
public class ScoreService {
    private final ScoreDao scoreDao;

    @CrossOrigin
    public List<Score> listScore(){
        return scoreDao.getAllScore();
    }

    @CrossOrigin
    public String deleteScore(Integer id){
        return scoreDao.deleteScore(id);
    }

    @Autowired
    public ScoreService(@Qualifier("fakeScoreDao") ScoreDao scoreDao) {
        this.scoreDao = scoreDao;
    }
    
    @CrossOrigin
    public int addScore(Score score) {
        return scoreDao.insertScore(score);
    }
}
