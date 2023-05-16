console.log(`\nWelcome. This is a new script by Klisa`);

generateButton.addEventListener("click", function() {
    loadFiles();
  });

async function loadFiles() {
    try {
        const imena = [
            'Stefan',
            'Aleksandar',
            'Miloš',
            'Marko',
            'Nemanja',
            'Milan',
            'Dušan',
            'Ivan',
            'Lazar',
            'Đorđe',
            'Filip',
            'Jovan',
            'Nenad',
            'Luka',
            'Darko',
            'Petar',
            'Vladimir',
            'Vladan',
            'Dejan',
            'Uroš',
            'Miloš',
            'Aleksandar',
            'Marko',
            'Milan',
            'Nikola',
            'Ivan',
            'Vladimir',
            'Nenad',
            'Dejan',
            'Dragan',
            'Đorđe',
            'Darko',
            'Goran',
            'Bojan',
            'Nemanja',
            'Dušan',
            'Saša',
            'Igor',
            'Miroslav',
            'Zoran'
        ];
        const prezimena = [
            'Bašović',
            'Batinić',
            'Bijeljanin',
            'Biljić',
            'Borovčanin',
            'Božinac',
            'Buroščić',
            'Cerović',
            'Ćeranić',
            'Đačić',
            'Ćorojević',
            'Danilović',
            'Delić',
            'Despotović',
            'Dobrilović',
            'Drnić',
            'Drljić',
            'Ećimović',
            'Erić',
            'Furdilović',
            'Gašović',
            'Gluhović',
            'Grujić',
            'Pilindavić',
            'Ivanović',
            'Jakovljević',
            'Janković',
            'Jeftić',
            'Jović',
            'Kikić',
            'Komnenović',
            'Konjokrad',
            'Kosanović',
            'Kosorić',
            'Kusmuk',
            'Lašović',
            'Lazić',
            'Lelek',
            'Liješćanin',
            'Majstorović',
            'Maksimović',
            'Malić',
            'Malović',
            'Marković',
            'Mijović',
            'Mirić',
            'Mirković',
            'Mitrović',
            'Nešković',
            'Nikolić',
            'Novaković',
            'Novosel',
            'Obrenović',
            'Orašanin',
            'Paonić',
            'Paunić',
            'Pavlović',
            'Pejinović',
            'Perović',
            'Petrušić',
            'Planojević',
            'Popović',
            'Radić',
            'Radović',
            'Raičević',
            'Samardžić',
            'Savčić',
            'Simović',
            'Stanišić',
            'Subašić',
            'Šalić',
            'Šehovac',
            'Šolaja',
            'Šuka',
            'Šulić',
            'Tamburić',
            'Terzić',
            'Trivković',
            'Vasić',
            'Vasović',
            'Vitorović',
            'Vučković',
            'Vuković',
            'Živanović'
        ];
        const nadimci = [
            'Prepek',
            'Poskok',
            'Taljiga',
            'Krbulja',
            'Čaruga',
            'Čašica',
            'Čutura',
            'Capin',
            'Sikirica',
            'Glavonja',
            'Ćumur',
            'Cigo',
            'Promaja',
            'Delegat',
            'Praga',
            'Bajonet',
            'Pujdo',
            'Sipljo',
            'Masni',
            'Žabac',
            'Papak',
            'Cucla',
            'Omara',
            'Šticar',
            'Vinklo',
            'Vagir',
            'Maljina',
            'Tocilo',
            'Papovka',
            'Podrezak',
            'Žilet'
        ];
        const naselja = [
            'Baltići',
            'Bandin Odžak',
            'Banja Lučica',
            'Barnik',
            'Bećari',
            'Bereg',
            'Bijela Voda',
            'Bjelasovići',
            'Bjelosavljevići',
            'Borovac',
            'Brejakovići',
            'Bukovik',
            'Cvrčići',
            'Čavarine',
            'Čitluci',
            'Donje Babine',
            'Donje Gire',
            'Donji Drapnići',
            'Donji Kalimanići',
            'Drecelj',
            'Dugančići',
            'Džindići',
            'Đedovci',
            'Gazivode',
            'Gornji Drapnići',
            'Gornji Kalimanići',
            'Gornji Poretak',
            'Grbići',
            'Gurdići',
            'Hrastišta',
            'Imamovići',
            'Jabuka',
            'Jasik',
            'Kadića Brdo',
            'Kalauzovići',
            'Kaljina',
            'Kazmerići',
            'Klečkovac',
            'Knežina',
            'Kolakovići',
            'Košutica',
            'Krajšići',
            'Kruševci',
            'Kruševo',
            'Kula',
            'Kusače',
            'Kuti',
            'Mandra',
            'Majdani',
            'Mangurići',
            'Margetići',
            'Medojevići',
            'Meljine',
            'Mičivode',
            'Miletići',
            'Miletine',
            'Nehorići',
            'Nepravdići',
            'Novo Selo',
            'Novoseoci',
            'Ozerkovići',
            'Parževići',
            'Pavičići',
            'Pediše',
            'Pihlice',
            'Pobratci',
            'Podkrajevi',
            'Podromanija',
            'Preljubovići',
            'Prinčići',
            'Pusto Selo',
            'Ravna Romanija',
            'Rijeća',
            'Rudine',
            'Selišta',
            'Sijerci',
            'Smrtići',
            'Sokolovići',
            'Šahbegovići',
            'Šaševci',
            'Šenkovići',
            'Širijevići',
            'Točionik',
            'Turkovići',
            'Vidrići',
            'Vraneši',
            'Vrapci',
            'Vražići',
            'Vrhbarje',
            'Vrhovina',
            'Vrutci',
            'Vukosavljevići',
            'Zagrađe',
            'Žljebovi',
            'Žulj',
            'Žunović'
        ];

        const crimes = [
            '„Teška tjelesna povreda“| nakon kraćeg verbalnog sukoba u alkoholisanom stanju pretukao oca i porodičnog prijatelja na njihovom imanju u mjestu ###NEW_RANDOM_MJESTO###.',
            '„Ugrožavanje sigurnosti“| nakon proslave pobjede FK Glasinac protiv FK Vlasenica pucao kroz prozor svog automobila i uzvikivao "Kosovo je srce Srbije" i "Dogodine u Prizrenu".',
            '„Izazivanje opšte opasnosti u saobraćaju“| zaustvljao saobraćaj i lažno se predstavljao kao radnik "Romanija puteva" i preusmjeravao saobraćaj u pravcu Olova. Otkriven je slučajno kada su stanovnici Han Pijeska primjetili da nijedno vozilo nije prošlo kroz to mjesto iz pravca Sokoca već par sati.',
            '„Izazivanje opšte opasnosti“| obukao doktorski mantil i zaustavljao saobraćaj na magistralnom putu M19 i tvrdio da je pobjegao iz JZU "Zavod za forenzičku psihijatriju" te da je u navedenoj ustavnovi u toku pubuna i da su pacijenti preuzeli bolnicu.',
            '„Nedozvoljena proizvodnja i promet opojnih droga“| na njegovom porodičnom imanju nedaleko od Sokoca pronađen zasad marihuane. Iako je zasad pored puta, nije ga bilo lako primjetiti jer je okružen kukuruzima. Slučaj je policiji prijavio izvjesni ###NEW_IME_I_PREZIME### koji je primjetio plantažu praveći amaterske snimke dronom.',
            '„Teška tjelesna povreda“| nakon što je uhvaćen u krađi šume i upozoren od radnika ŠG "Romanija" najprije verbalno napao, a zatim istukao šumara njegovim sopstvenim čekićem.',
            '„Oštećenje tuđe stvari“ i „Izazivanje opšte opasnosti“| nakon kraće rasprave sa vlasnikom lokalnog kafića koji mu duguje novac otišao kući po motornu testeru i izrezao mu šank.',
            '„Ubistvo“| nakon kraće rasprave oko podjele imovine ubio ženu koja je tvrdila da joj pripada dio imanja zbog porodične veze sa vlasnikom zemljišta. Ispostavilo se da je u pitanju tetka koju nije poznavao.',
            '„Izazivanje opšte opasnosti“| pozvao Policijsku stanicu Sokolac i tvrdio da je postavljena bomba u ŠG "Romanija" čiji je uposlenik. Nakon hapšenja je priznao da mu se nije išlo na posao taj dan jer je bio mamuran.',
            '„Teška krađa“| zajedno sa maloljetnim M.R. iz Sokoca skinuo ogradu i bakarne oluke sa vikendice poznatog sokolačkog političara.',
            '„Izazivanje opšte opasnosti u saobraćaju“| nakon što mu je saobraćajna policija ustanovila 2.4 promila alkohola pokušao da ukrade policijsko vozilo prilikom legitimisanja.',
            '„Izazivanje opšte opasnosti“| prilikom proslave rođenja djeteta pucajući iz automatske puške ubio komšijinog psa.',
            '„Ugrožavanje sigurnosti“ i „Izazivanje opšte opasnosti“| prilikom proslave pobjede KK Partizana protiv KK Cibone bacio bombu na susjedno imanje oštetivši više pomoćnih objekata.',
            '„Teška krađa“| iskoristio nepažnju policijskih službenika u kontroli saobraćaja te ukrao policijski radar "Ramer" i pobjegao u pravcu Pala. Brzom intervencijom uhapšen je i vraćen u Sokolac.',
            '„Teška krađa“ i „Ugrožavanje sigurnosti“| uz prijetnju pištoljem otuđio pazar iz kladionice "Mozzart" u Sokocu.',
            '„Teška krađa“ i „Ugrožavanje sigurnosti“| uz prijetnju pištoljem otuđio pazar iz pekare u Sokocu.',
            '„Teška krađa“| ukrao vozilo Golf2 čiji je vlasnik ###NEW_IME_I_PREZIME### iz mjesta ###NEW_RANDOM_MJESTO### i odvezao se na teferič u Rogaticu.',
            '„Teška krađa“| ukrao vozilo Audi čiji je vlasnik ###NEW_IME_I_PREZIME### iz mjesta ###NEW_RANDOM_MJESTO### i odvezao se na predizborni skup u Han Pijesak.',
            '„Izazivanje opšte opasnosti“| dovezao kamion pun šuta i iskipao ga ispred jedne porodične kuće u Sokocu tvrdeći da mu vlasnik kuće ###NEW_IME_I_PREZIME### nije isplatio zarađene dnevnice.',
            '„Izazivanje opšte opasnosti“| u alkoholisanom stanju traktorom blokirao svatove na lokalnom putu tvrdeći da mu mladoženja ###NEW_IME_I_PREZIME### nije isplatio zarađene dnevnice.'
        ];

        function getRandomFullName() {
            const randomNameIndex = Math.floor(Math.random() * imena.length);
            const randomSurnameIndex = Math.floor(Math.random() * prezimena.length);
            return `${imena[randomNameIndex]} ${prezimena[randomSurnameIndex]}`;
        }

        function getRandomNickname() {
            const randomNicknameIndex = Math.floor(Math.random() * nadimci.length);
            return nadimci[randomNicknameIndex];
        }

        function getRandomPlace() {
            const randomPlaceIndex = Math.floor(Math.random() * naselja.length);
            return naselja[randomPlaceIndex];
        }

        function getCrime() {
            const randomCrimeIndex = Math.floor(Math.random() * crimes.length);
            return crimes[randomCrimeIndex];
        }

        function getInitials(fullName) {
            const fullNameSplit = fullName.split(' ');
            return `${fullNameSplit[0].charAt(0)}.${fullNameSplit[1].charAt(0)}.`;
        }

        const IME_I_PREZIME = getRandomFullName();
        const INICIJALI = getInitials(IME_I_PREZIME);
        const RANDOM_BROJ_GODINA = Math.floor(Math.random() * (54 - 19 + 1)) + 19;
        const RANDOM_NADIMAK = getRandomNickname();
        const RANDOM_MJESTO = getRandomPlace();
        const NICKNAME_INCLUDED = Math.random() >= 0.5;

        const intro_A = [
            'Policijski službenici Policijske stanice Sokolac lišili su slobode lice ###INICIJALI_OSUMNJICENOG### zbog sumnje da je počinio krivično djelo ###KRIVICNO_DJELO###.'
        ];
        const intro_B = [
            'Kako smo nezvanično saznali, osumnjičeni je ###IME_I_PREZIME###',
            'Kako policijska uprava saznaje u pitanju je ###IME_I_PREZIME###',
            'Prema izvoru bliskom policiji u pitanju je ###IME_I_PREZIME###',
            'Prema navodima mještana u pitanju je ###RANDOM_BROJ_GODINA###-godišnji ###IME_I_PREZIME###',
            'Kako redakcija saznaje radi se o osobi ###IME_I_PREZIME###'
        ];
        const infix_A = [
            'zvani ###RANDOM_NADIMAK###',
            'poznatiji kao ###RANDOM_NADIMAK###',
            'mještanima poznatiji kao ###RANDOM_NADIMAK###'
        ];
        const infix_B = [
            'iz Sokoca.',
            'iz mjesta ###RANDOM_MJESTO###.',
            'iz mjesta ###RANDOM_MJESTO### kod Sokoca.',
            'iz mjesta ###RANDOM_MJESTO### u blizini Sokoca.',
            'iz mjesta ###RANDOM_MJESTO### nedaleko od Sokoca.'
        ];
        const infix_C = [
            'Osumnjičeni se terti da je',
            'Njemu se stavlja na teret da je'
        ];
        const sufix = [
            'U toku je dokumentovanje predmeta, nakon čega će Okružnom javnom tužilaštvu Istočno Sarajevo protiv ###INICIJALI_OSUMNJICENOG### biti podnesen izvještaj o počinjenom krivičnom djelu.',
            'Osumnjičeni ###INICIJALI_OSUMNJICENOG### je uz Izvještaj o počinjenom krivičnom djelu predat tužiocu Okružnog javnog tužilaštva Istočno Sarajevo na dalje postupanje.'
        ];

        const c = getCrime();
        const crime = getCrime().split('|');
        const krivicnoDjelo = crime[0];
        const krivicnoDjeloOpis = crime[1];

        // CREATING TEMPLATE
        const template = [];
        const t = intro_A[0] + '</br>';
        template.push(intro_A[0] + '</br>');
        template.push(intro_B[Math.floor(Math.random() * intro_B.length)]);
        if (NICKNAME_INCLUDED) {
            const lastElementIndex = template.length - 1;
            const lastElement = template[lastElementIndex];
            const concatenatedText = lastElement + " " + infix_A[Math.floor(Math.random() * infix_A.length)];
            template[lastElementIndex] = concatenatedText;
        }
        template.push(` ${infix_B[Math.floor(Math.random() * infix_B.length)]}` + '</br>' + '</br>'); // iz mjesta...
        template.push(`${infix_C[Math.floor(Math.random() * infix_C.length)]}` + krivicnoDjeloOpis + '</br>'+ '</br>'); // Osumnječeni se terti da je...
        template.push(sufix[Math.floor(Math.random() * sufix.length)] + '</br>');

        let content = template.join('');

        content = content.replace('###IME_I_PREZIME###', IME_I_PREZIME);
        content = content.replace('###INICIJALI_OSUMNJICENOG###', INICIJALI);
        content = content.replace('###KRIVICNO_DJELO###', krivicnoDjelo);
        content = content.replace('###RANDOM_BROJ_GODINA###', RANDOM_BROJ_GODINA);
        content = content.replace('###RANDOM_NADIMAK###', RANDOM_NADIMAK);
        content = content.replace('###RANDOM_MJESTO###', RANDOM_MJESTO);
        content = content.replace('###NEW_RANDOM_MJESTO###', getRandomPlace());
        content = content.replace('###NEW_IME_I_PREZIME###', getRandomFullName());
        content = content.replace('###INICIJALI_OSUMNJICENOG###', INICIJALI);

        //console.clear();
        const element = document.getElementById("output");
        element.innerHTML = content;
    } catch (error) {
        console.error('Error loading files:', error);
    }
}

