package com.example.Braimprove.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class Score {
    private final Integer id;
    private final String nickname;
    private final String game;
    private final Float score;
    private final String dificuldade;

    public Integer getId() {
        return id;
    }

    public String getNickname() {
        return nickname;
    }

    public String getGame() {
        return game;
    }

    public Float getScore() {
        return score;
    }

    public String getDificuldade() {
        return dificuldade;
    }

    public Score(@JsonProperty("id") Integer id,@JsonProperty("name") String nickname,@JsonProperty("game") String game,@JsonProperty("score") Float score,@JsonProperty("dificuldade") String dificuldade) {
        this.id = id;
        this.nickname = nickname;
        this.game = game;
        this.score = score;
        this.dificuldade = dificuldade;
    }
}
