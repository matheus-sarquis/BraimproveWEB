package com.example.Braimprove.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectDataBase {
    private static final String STRING_CONEXAO = "jdbc:mysql://localhost:3306/braimprove?useTimezone=true&serverTimezone=UTC";
    private static final String USUARIO = "root";
    private static final String SENHA = "";

    public static Connection conectDb(){
        try{
            Class.forName("com.mysql.jdbc.Driver");
            Connection conection = DriverManager.getConnection(STRING_CONEXAO, USUARIO, SENHA);
            return conection;
        }catch (ClassNotFoundException | SQLException e){
            System.err.println("CONEXAO: " + e.getMessage());
            return null;
        }
    }
}