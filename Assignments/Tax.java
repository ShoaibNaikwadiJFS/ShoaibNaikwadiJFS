package com.company;
import java.util.Scanner;
public class Tax {
    public static void main(String[] args) {
        int income;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Income");
        income = sc.nextInt();

        if (income <= 180000) {
            System.out.println("Tax payable: Nil");
        } else if (income <= 300000) {
            System.out.println("Tax payable: 10%");
        } else if (income <= 500000) {
            System.out.println("Tax payable: 20%");
        } else if (income <= 1000000) {
            System.out.println("Tax payable: 30%");
        }
    }

}