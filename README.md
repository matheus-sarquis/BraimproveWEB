# 📝 Braimprove.

Braimprove - Aplicativo para treinamento cerebral feito no 7º Semestre de EC

        O Braimprove é um sistema que tem como objetivo exercitar as faculdades mentais através de minigames divertidos.
        O minigame Jogo da Memória tem como objetivo aperfeiçoar a memória do usuário. E o Sudoku tem como objetivo
        melhorar o raciocínio lógico e atenção do jogador.
	
## 🎬 Daily 
<a href=https://youtu.be/qW2Wfh0x9RY>Clique Aqui<a/>	
## 🎈 Logo 
<a href="https://ibb.co/ByX2YBd"><img src="https://i.ibb.co/ByX2YBd/brain.png" alt="brain" border="0"></a>
## 👨‍💻  Participantes
- Caio Foramiglio Vieira   - 081190043 
- Gustavo Santos Guimarães - 081180013
- Lucas Frias Oliveira     - 081190009 
- Matheus Faria Sarquis    - 081190031

  
## 📦 Dependencias
  
###  APIS Utilizadas

- API Whats App
- API Sugoku
- API Forza.tk
- API Zoo Animals
- API Local, desenvolvida pelos autores
  
###  Linguagens Utilizadas

- TypeScript
- JavaScript
- CSS
- SCSS
- HTML
- Java


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
