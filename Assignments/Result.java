package com.company;
import java.util.Scanner;
public class Result {
    public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            System.out.println("Enter the marks of three subjects:\n");
            int marks_1 = sc.nextInt();
            int marks_2 = sc.nextInt();
            int marks_3 = sc.nextInt();

            if (marks_1 >= 60 && marks_2 >= 60 && marks_3 >= 60) {
                System.out.println("Passed");
            }
            else if (marks_1 >= 60 && marks_2 >= 60 || marks_3 >= 60) {
                System.out.println("Promoted");
            }
            else if (marks_1 >= 60 || marks_2 >= 60 || marks_3 >= 60 && marks_1 <= 60 || marks_2 <= 60 || marks_3 <= 60) {
                System.out.println("Fail");
            }
        }
    }