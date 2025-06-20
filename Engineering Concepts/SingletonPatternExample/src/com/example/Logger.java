package com.example;

public class Logger {

    // Private static instance of Logger (eager initialization or lazy will come here)
    private static Logger instance;

    // Private constructor to prevent instantiation
    private Logger() {
        System.out.println("Logger Initialized");
    }

    // Public method to provide access to the instance
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger(); // Lazy initialization
        }
        return instance;
    }

    // Logging method
    public void log(String message) {
        System.out.println("[LOG]: " + message);
    }
}
