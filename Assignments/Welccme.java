package com.company;
import java.util.Scanner;
public class Welcome {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        String userid = "admin";
        String password = "admin";

        for (int i = 3; i >= 1; i--) {
            System.out.println("Enter userid");
            String user_id1 = input.nextLine();
            System.out.println("Enter password");
            String password1 = input.nextLine();

            if ((userid.matches(user_id1)) && (password.matches(password1))) {
                System.out.println("Welcome " + userid);
                break;
            }
            else {
                System.out.println("Login Failed Attempts Remaining " + (i - 1));
                System.out.println("");
                if (i == 1) {
                    System.out.println("Contact Admin");
                }
            }

        }

    }
}