Uppgift 02 – Dramatiker- och Backend-prov 
Allmänna anmärkningar: 
•	Detta är den andra obligatoriska uppgiften i denna kurs. 
•	Välj om du vill göra denna övning individuellt eller i grupp med max 2 elever. I båda fallen konfigurerar du ett offentligt git-arkiv och arbetar mot det. Jag skulle vilja se att du har tillämpat de begrepp som visas i kursen, dvs branching, pull requests och att alla har bidragit till projektet. 
	Du kan välja mellan följande två system som din applikation under test (AUT): API:et som tillhör vue-applikationen 'Tester Hotel'. 
	API:et för biluthyrning introducerades förra veckan. 
	
	Använd playwright för att implementera din lösning med antingen Javascript eller Typescript. 
	Om du har några frågor, vänligen kontakta mig innan du fortsätter. 

Regler för inlämning: 
•	Skapa en offentlig lagringsplats på din GitHub med följande namnformat: assignment02-nameefternamn (t.ex. 'assignment02-rafaelsilva', 'assignment02-rafaelsilva-andersholm', etc.). Se till att namnet på repositoryt är skrivet med små bokstäver och se till att du stavar ordet "tilldelning" korrekt. 
•	Dela URL:en till ditt repository i studentportalen i klartext. d.v.s. Ladda inte upp lösa filer till studentportalen, utan endast URL:en till ditt repository. Studentportalen är det enda stället där du ska ladda upp ditt arbete. 

Uppgiften: 
Förra veckan hade du en övning där du skulle designa en testsvit med 10 testfall för en backend-applikation och använda både REST-klient och postman för att köra dina tester. I den här uppgiften är din uppgift att implementera dina testfall med hjälp av playwright och APIRequestContext (https://playwright.dev/docs/api/class-apirequestcontext). 
Kriterium för G: 
•	Implementera 10 fall för serverdelsprogrammet som du valde med hjälp av playwright och APIRequestContext. 
•	Visa att du har minst 10 git-incheckningar när du implementerar ditt projekt (om du arbetar i en grupp måste du se till att din grupp kan hantera git). 

Kriterium för VG: 
•	Alla objekt i kriteriet för G. 
•	Tillämpa DRY-principen (upprepa inte själv!). d.v.s. upprepa inte kodblock i onödan. 
•	Dela upp ditt projekt i separata filer, t.ex. hjälpare, klasser, konfigurationer etc. 
•	Randomisera indata t.ex. med fakerjs. 
•	Dölj känslig data i .env-filer och använd .gitinore-filen för att undvika att binda upp filer och mappar som inte ska laddas upp till ditt repository, t.ex. test-results/, tests-examples/. 

