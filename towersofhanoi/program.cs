// Opgaven var at jeg skulle lave et rekursions program som kunne løse Towers of Hanoi med 4 diske
using System;

namespace towersofhanoi
{
    class tower
    {
        static void towerOfHanoi(int n, char fra, char hjælper, char mål)
        {
            if (n == 1)
            {
                Console.WriteLine("Flyt disk 1 fra felt " +
                                  fra + " til felt " + hjælper);
                return;
            }
            towerOfHanoi(n - 1, fra, mål, hjælper);
            Console.WriteLine("Flyt disk " + n + " fra felt " +
                              fra + " til felt " + hjælper);
            towerOfHanoi(n - 1, mål, hjælper, fra);
        }
        public static void Main(string[] args)
        {
            int n = 4; // Antal diske
            towerOfHanoi(n, 'A', 'C', 'B'); // A, B og C er felterne
        }
    }
}
