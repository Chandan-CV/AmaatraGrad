

function getSheetData() {
    const rand= [
"1. Sanjay - cash",
"2. Akansha - cash",
"3. Naveen - cash",
"4. Kushal - cash",
"5. Varad - cash",
"6. Pranav R - online 1",
"7. Yatharth - online 1",
"8. Rhea - online 3",
"9. Gayathri - online 4",
"10. Sandeep - online 5",
"11. Saanvi S - online 6",
"12. Sahana R - online 7",
"13. Athira - online 8 ",
"14. Ananya A - online 9",
"15. Shreya M - cash",
"16. Ambika - cash",
"17. Aarushi - cash",
"18. Aditya Kumar - cash",
"19. Ajitesh - online",
"20. Mahalakshmi K - online 10",
"21. Adithya N - online 11",
"22. Kashvi - online 12",
"23. Devam - online 13",
"24. Abhinav - online 14",
"25. Pratheek - online 15",
"26. Anushka B - online 16",
"27. Bharath - online 17",
"28. Vindhya G - online 18",
"29. Trisha V - online 19",
"30. Krishna A - online 20",
"31. Adithya K - online 21",
"32. Aditi - online 22",
"33. Chandan - online 23",
"34. Shiven - online 24",
"35. Nandana - online 25",
"36. Avanish - online 26",
"37. Anushka S - online 27",
"38. Arin - online 28",
"39. Janyaa - online 29",
"40. Varuni - online 30",
"41. Akshaya S - online 31",
"42. Rithvik - online 32",
"43. Anshika - online 33",
"44. Eeshan - online 34",
"45. Medha - online 35",
"46. Katherine - online 36",
"47. Sneha - online 37",
"48. Anwar - online 38",
"49. Aishwarya - online 39",
"50. Adeesh - online 40",
"51. Aniruddh - online 41",
"52. Deepikaa - cash",
"53. Apoorva - online 42",
"54. Tausiq - online 43",
"55. Navya - cash",
"56. Sreecharan - cash",
"57. Sruthy S - cash",
"58. Dhrumi - cash",
"59. Prerak - cash",
"60. Anirudh M - cash",
"61. Ryyan - cash",
"62. Ajaybir - cash",
"63. Vennela - cash",
"64. Yashas R - cash",
"65. Aditi CS - cash",
"66. Abhijith CS - cash",
"67. Arnav Priyal - cash",
"68. Shriyansh Patnaik - cash",
"69. Shrreya S - cash",
"70. Anish - cash",
"71. Tanisha P - cash",
"72. Arav - cash",
"73. Mirudhula - cash",
"74. Meenu - cash",
"75. Padmini - cash",
"76. Vibhasha - cash",
"77. Ishika - cash",
"78. Vismaya - online 44",
"79. Sashank R - online 45",
"80. Shriya K - online 46",
"81. Trisha K - online 47",
"82. Lithika - online 48",
"83. Shreya P - online 49",
"84. Smera - online 50",
"85. Adit - online 51",
"86. Neha - online 52",
"87. Shreyas - online 53",
"88. Basil - online 54",
"89. Hari - online 55",
"90. Rhitankar - online 56",
"91. Vrishank - online",
"92. Shrikruthi - online",
"93. Joe - online",
"94. Varun k - cash",
"95. Tanisha B - online",
"96. Shaatvika - online",
"97. Diti - online",

    ]
 const A= [
        "ADEESH DEVANAND",
    "AKANSHA MANEESH",
    // "ANANYA CHALLAPALLI",
    "ANIRUDH MOHTA",
    "ANSHIKA BAKSHI",
    "ANWAR MUHAMMED",
    "ARIN KASHIV",
    "AVANISH VINODH",
    "DEVAM SANDEEP CHHEDA",
    "DEEPIKAA",
    "GAYATHRI CHAKRAVARTHY",
    "ISHIKA KAVURU",
    // "JOE JOSEPH",
    "LITHIKA RAMESH",
    "NAVEEN RADHAKRISHNAN",
    // "PARIKSHIT SHARMA",
    "PRERAK JAIN",
    "RITHVIK TAMBI",
    "SAI ABHINAV VADAGURU",
    "SREECHARAN B DHANDAPANI",
    "SRUTHY SUDHIR MENON",
    // "VARUN KARTHIK",
    "VARUNI LOHANI",
    ]
    
    const B =[
        "AARUSHI POTDAR",
        "ABHIJITH C S",
        "ADITI C S",
        "ADITI PRASHANT",
        "ADITYA KUMAR",
        "AKSHAYA SUNIL",
        "AMBIKA PRASAD",
        "ANANYA ACHAR",
        "ANANYA RAI",
        "ANUSHKA BENJAMIN",
        "K MAHALAKSHMI",
        "KATHERINE GEORGE",
        "MEDHA CHATTERJEE",
        "NANDANA SAHADEVAN",
        "PRATHEEK REDDY",
        "RHITANKAR BASAK",
        "SHREYA PARAMESWARAN",
        "SHREYA MALLICK",
        "SHRIYANSH PATNAIK",
        "SHRREYA SRIKANTH",
        "SMERA NARESH",
        "TRISHA ANNIE KURUVILLA",
        "TRISHA VIJAYEKKUMARAN",
        "VENNELA RUDRARAJU",
        "VISMAYA SAAGARIKA S",
        "VINDYA G",
        "VRISHANK BHARGAV",
        "YASHAS S REDDY",
    ]
    
    const C =[
        "ADITHYA KIRAN",
        "ADIT BASAK",
    // "ADITHYA RANJITH",
    "ADITYA NASKAR",
    "AJITESH DASGUPTA",
    // "AMISHI GUPTA",
    "ARAV JAIN",
    // "ASHIRVAD NATHANIEL",
    // "AVNEET SINGH KAPOOR",
    "BASIL NELSON K",
    "BHARATH KUMAR",
    "CHANDAN C V",
    // "DHANUSH SURESH JETTIPALLE",
    "DHRUMI MAITRA",
    "HARI KRISHNA REDDY",
    "KASHVI PRAWAL",
    "KOPPISETTY MONICA",
    "NAVYA MULIMANI",
    "NEHA NAMBURI",
    "RYYAN MATHEW HASAN",
    "S KUSHAL",
    "SANJAY SRIKANTH",
    "SASHANK RAJA",
    // "SHHREYA ANAND",
    // "SRIHARSHA VVS",
    "VARAD SHIRISH ATHALYE",
    // "VIKHYAT SAI JAGINI",
    ]
    
    const D= [
    "    A TAUSIQ SRINIVASA VARMA",
    "AISHWARYA N MURTHY",
    "AJAYBIR SINGH HARI",
    "ANIRUDH DEVANAND",
    "ANISH UMATE",
    "ANUSHKA SINGH",
    "APOORVA KALRA",
    "ARNAV PRIYAL KAREKAR",
    "ATHIRA VINOD KUMAR",
    "EESHAAN S REDDY",
    "JANYAA HIREN MEHTA",
    "K KRISHNA AASRITH",
    "K SHRIKRUTHI",
    "G M MEENU",
    "PADMINI G",
    "PRANAV RATISH",
    "RHEA BASAK",
    "SAANVI S",
    "SAHANA RAJA",
    "SANDEEP REEHAL",
    "SHIVEN GROVER",
    "SHREYAS PATRO",
    "SHRIYA KONDURU",
    "SNEHA VINOTH KUMAR",
    "MRIDHULA",
    "TANISHA PANDEY",
    // "VANSHIKA KHEMKA",
    "VIBHASHA S",
    "YATHARTH THAKUR",
    ]
return {A,B,C,D,rand}

}

export default getSheetData
