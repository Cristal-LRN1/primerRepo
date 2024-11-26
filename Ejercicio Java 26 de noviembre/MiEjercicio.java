package org.generation.ejercicioloops;


import java.util.Scanner;


public class MiEjercicio {


    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Ingresa tu nombre: ");

        String nombre = scanner.nextLine();

        for (int i = 0; i < nombre.length(); i++) {

            System.out.println(nombre.charAt(i));

        }

        scanner.close();

    }

}
