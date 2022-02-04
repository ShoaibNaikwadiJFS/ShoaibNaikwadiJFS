package com.company;
import java.util.Scanner;
public class Armstrong {
    public static void main(String[] args) {
        System.out.println("enter number ");
        Scanner input = new Scanner(System.in);
        int num = input.nextInt();
        int sum = 0;
        int num2 = num;
        while (num2 > 0) {

            int lastDigit= num2%10;
            sum = sum + (lastDigit*lastDigit*lastDigit);
            num2=num2/10;
        }
        if (sum == num)
            System.out.println("Entered number "+num+" is a Armstrong number");
        else
            System.out.println("Enter number "+num+" is not Armstrong number");

    }

}
