

function getSheetData() {
    const rand= [
        "1. Sanjay",
        "2. Akansha",
        "3. Naveen ",
        "4. Kushal",
        "5. Varad ",
        "6. Pranav R",
        "7. Yatharth",
        "8. Rhea ",
        "9. Gayathri ",
        "10. Sandeep",
        "11. Saanvi S",
        "12. Sahana R",
        "13. Athira",
        "14. Ananya A",
        "15. Shreya M ",
        "16. Ambika",
        "17. Aarushi ",
        "18. Aditya Kumar",
        "19. Ajitesh",
        "20. Mahalakshmi K",
        "21. Adithya N ",
        "22. Kashvi ",
        "23. Devam",
        "24. Abhinav ",
        "25. Pratheek ",
        "26. Anushka B",
        "27. Bharath",
        "28. Vindhya G",
        "29. Trisha V",
        "30. Krishna A",
        "31. Adithya K",
        "32. Aditi",
        "33. Chandan",
        "34. Shiven",
        "35. Nandana",
        "36. Avanish",
        "37. Anushka S",
        "38. Arin",
        "39. Janyaa",
        "40. Varuni",
        "41. Akshaya S",
        "42. Rithvik",
        "43. Anshika",
        "44. Eeshan",
        "45. Medha",
        "46. Katherine",
        "47. Sneha",
        "48. Anwar",
        "49. Aishwarya",
        "50. Adeesh",
        "51. Aniruddh",
        "52. Deepikaa",
        "53. Apoorva",
        "54. Tausiq",
        "55. Navya",
        "56. Sreecharan",
        "57. Sruthy S",
        "58. Dhrumi",
        "59. Prerak",
        "60. Anirudh M",
        "61. Ryyan",
        "62. Ajaybir",
        "63. Vennela",
        "64. Yashas R",
        "65. Aditi CS",
        "66. Abhijith CS",
        "67. Arnav Priyal",
        "68. Shriyansh Patnaik",
        "69. Shrreya S",
        "70. Anish",
        "71. Tanisha P",
        "72. Arav",
        "73. Mirudhula",
        "74. Meenu",
        "75. Padmini",
        "76. Vibhasha",
        "77. Ishika",
        "78. Vismaya",
        "79. Sashank R",
        "80. Shriya K",
        "81. Trisha K",
        "82. Lithika",
        "83. Shreya P",
        "84. Smera",
        "85. Adit",
        "86. Neha",
        "87. Shreyas",
        "88. Basil",
        "89. Hari",
        "90. Rhitankar",
        "91. Vrishank",
        "92. Shrikruthi",
        "93. Joe",
        "94. Varun k",
        "95. Tanisha B",
        "96. Shaatvika",
        "97. Diti",
        "98. Parikshit",
        "99. Vanshika",
        "100. Avani",
        "101. Srishti",
        "102. Vikhyat",
        "103. Tamanna",
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
