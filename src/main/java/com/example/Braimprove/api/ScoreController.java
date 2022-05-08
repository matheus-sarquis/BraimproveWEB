package com.example.Braimprove.api;

import com.example.Braimprove.service.ScoreService;
import com.example.Braimprove.model.Score;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("api/score")
public class ScoreController {
    private final ScoreService scoreService;

    @GetMapping
    public List<Score> listScore( ) {
        return scoreService.listScore();
    }

    @Autowired
    public ScoreController(ScoreService scoreService) {
        this.scoreService = scoreService;
    }

    @PostMapping
    public void addScore(@RequestBody Score score){
        scoreService.addScore(score);
    }
}
