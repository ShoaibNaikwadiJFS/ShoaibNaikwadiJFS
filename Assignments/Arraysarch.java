package com.company;
import java.util.Scanner;
public class Arraysearch {
    public static void main(String[] args) {
        int flag =0;
        int[] a = {5, 12, 14, 6, 78, 19, 1, 23, 26, 35, 37, 7, 52, 86, 47};

        System.out.println("Enter a number to Search");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        for (int i = 0; i < a.length; i++) {
            if (a[i] == num) {
                System.out.println("Match found at position " +i);
                flag=1;
            }
        }
        if (flag ==0){
            System.out.println("Match not found");

        }
    }
}