# BraimproveWEB-MVC
Projeto criado para disciplina de LP3, voltado a jogos em web utilizando uma API em java para comunicação com o SQL Server


## Script Database

CREATE DATABASE [Users]

CREATE DATABASE [Users]

USE [Users]

create TABLE [dbo].[Score]
(
[Id] int IDENTITY,
[Nickname] NVARCHAR(50), 
[Game] NVARCHAR(50),
[Score] float,
[Dificuldade] NVARCHAR(10)
)

#Stored Procedures

create procedure spInsertScore
( 
@Nickname NVARCHAR(50),
@Game NVARCHAR(50),
@Score float,
@Id int ) as begin insert into Score(Id, Nickname, Game, Score)
values (@Id, @Nickname, @Game, @Score) end
