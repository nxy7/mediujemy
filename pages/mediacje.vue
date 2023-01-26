<template>

    <div class="flex space-x-6 mt-10">
        <div class="flex flex-col space-y-2">
            <NuxtLink v-for="item, ind in expandables" class="p-2 rounded-md hover:bg-slate-100 w-55 text-center"
                :href="`#${ind}`">{{ item.title }}</NuxtLink>
        </div>
        <div class="flex flex-col space-y-1">
            <Expandable v-for="item, ind in expandables" :title="item.title" :id="ind.toString()"
                :open="`#${ind.toString()}` == selectedHash">
                <div v-html="item.content"></div>
            </Expandable>
        </div>

    </div>

</template>

<script setup lang="ts">
let expandables = [
    {
        title: "Czym jest mediacja",
        content: `
    <p>
                    Mediacja jest to polubowna metoda rozwiązywania sporów, w której bezstronna i neutralna
                    osoba trzecia pomaga stronom we wzajemnej komunikacji, określeniu interesów i kwestii do
                    dyskusji oraz dojściu do wspólnie akceptowalnego porozumienia. Proces ten ma charakter
                    dobrowolny, poufny i nieformalny. Jeśli jego przebieg jest pomyślny, kończy się najczęściej
                    porozumieniem/ugodą osób będących w sporze.
                </p>
                <p>
                    Mediacje różnią się od rozstrzygnięć sądowych przede wszystkim tym, że ich celem nie jest
                    ustalenie, kto ma rację, ale wypracowanie rozwiązania, które zadowala obie strony sporu i
                    na jakie w związku z tym mogą one przystać dobrowolnie.

                </p>

                <p>
                    Ważne jest to aby obie strony mediacji były aktywne i otwarcie mówiły o swoich potrzebach,
                    obawach i emocjach.
                    Mediator może zastosować szeroką gamę technik, aby kierować procesem mediacyjnym w
                    konstruktywnym kierunku i pomagać stronom w znalezieniu optymalnego rozwiązania.
                    Spory mogą dotyczyć różnych dziedzin życia: sprawy handlowe, prawne, dyplomatyczne,
                    pracownicze, społeczne i rodzinne.

                </p>
                <p>
                    Jakie sprawy nie nadają się do mediacji?
                    Choroby psychiczne – niepoczytalność, odebranie praw obywatelskich,
                    ubezwłasnowolnienie, a także depresja – są to sytuacje, które dyskwalifikują sprawę do
                    skierowania jej do mediacji. Brak pełnej świadomości podejmowania decyzji nie daje szans
                    na to, aby mediacje odniosły oczekiwany skutek.

                </p>
    `
    },
    {
        title: "Mediacje sądowe i pozasądowe",
        content: `
    Można wyróżnić dwa rodzaje mediacji: sądową oraz pozasądową. Na pierwszą z nich strony
                sporu są kierowane na podstawie postanowienia sądu już po wniesieniu pozwu czy
                wniosku wszczynającego postępowanie, natomiast mediacje pozasądowe mają miejsce w
                sytuacji, gdy sprawa nie jest jeszcze rozpatrywana przez sąd wówczas mediację rozpoczyna
                się na wniosek jednego z jej uczestników. Co istotne, ugoda zawarta podczas mediacji
                zarówno w trakcie postępowania sądowego, jak i poza nim może zostać zatwierdzona przez
                sąd, dzięki czemu na jej podstawie będzie można prowadzić ewentualną egzekucja.
                Wśród korzyści płynących z mediacji w pierwszej kolejności warto wymienić to, że w czasie
                jej trwania strony mogą próbować wspólnie wypracować rozwiązanie, które zostanie
                zaakceptowane przez każdą z nich. Jest to o tyle istotne, że w postępowaniu sądowym
                decyzja jest wydawana przez sąd i zazwyczaj przynajmniej jedna ze stron jest z niej
                niezadowolona. Mediacja jest niejawna, co oznacza, że zarówno mediator, jak i strony mają
                obowiązek zachować w tajemnicy wszystko, o czym się podczas niej dowiedzieli. Zaletą
                mediacji jest też jej niesformalizowany charakter atmosfera jest bardziej swobodna niż w
                sądzie, gdzie obowiązują pewne ramy procesowe.
                Bardzo istotną zaletą jest też obecność mediatora, który ma za zadanie zapewnić
                uczestnikom mediacji profesjonalne wsparcie m.in. poprzez udzielanie im głosu, zadawanie
                pytań, a także pilnowanie, aby ich rozmowa nie przerodziła się w kłótnię. Mediator jest
                bezstronny, czyli nie opowiada się za żadną ze stron. Jest też neutralny w stosunku do
                przedmiotu mediacji, co oznacza, że nie ma dla niego znaczenia, jakie rozwiązanie ustalą
                strony. Mediator nie zajmuje się ustaleniem tego, kto ma rację, nie narzuca też stronom
                rozwiązania, lecz pomaga im dojść do konsensusu.

                Mediacje są dobrowolne, jednak należy mieć na uwadze treść przepisu art. 187 § 1 pkt 3
                kodeksu postępowania cywilnego, który zobowiązuje do podania w pozwie informacji, czy
                strony podjęły próbę mediacji lub innego pozasądowego sposobu rozwiązania sporu, a jeśli
                tego nie uczyniły do wyjaśnienia dlaczego tak się stało. Ponadto przepisy k.p.c. zobowiązują
                sąd do dążenia do ugodowego rozwiązania sprawy, w szczególności do nakłaniania stron do
                mediacji. Dlatego coraz częściej można się spotkać z tym, że sądy kierują uczestników
                postępowania do mediacji.
                Zanim skierujemy sprawę do sądu warto rozważyć mediację, która zwiększa szanse na
                szybkie uzyskanie przez nas korzystnego rozstrzygnięcia, minimalizując przy tym koszty
                postępowania. Wprawdzie wymaga ona od nas dobrej woli, polegającej na chęci
                porozumienia się z drugą stroną i pójścia na ewentualne ustępstwa, jednak warto pamiętać,
                że pod wieloma względami mediacja może być dla nas korzystniejszym rozwiązaniem niż
                postępowanie sądowe.
    `
    },
    {
        title: "Mediacje cywilne",
        content: `
        Mediacja może być prowadzona we wszystkich sprawach cywilnych, w których
                dopuszczalne jest zawarcie ugody, tj. w sprawach, w których wynik postępowania jest
                zależny od woli stron.
                Jako przykład mediacji w postepowaniu cywilnym można podać sprawy:
                -o zapłatę
                -o zniesienie współwłasności
                -o dział spadku
                -podział majątku wspólnego
                I wiele innych jeżeli podlegają regulacji kodeksu cywilnego
        `
    }, {
        title: "Mediacje rodzinne i okołorozwodowe",
        content: `
        W sprawach o rozwód i separację, jeżeli istnieją widoki, na utrzymanie małżeństwa
                przedmiotem mediacji może być pojednanie małżonków
                Jeżeli jednak do pojednania nie dojdzie, celem mediacji może być ugodowe rozwiązanie
                kwestii dotyczących:
                -zaspokojenia potrzeb rodziny
                -alimentów
                -sposobu sprawowania władzy rodzicielskiej
                -kontaktów z dziećmi
                Ważnym elementem mediacji rodzinnych jest opracowanie przez strony porozumienia o
                sposobie wykonywania władzy rodzicielskiej i utrzymywania kontaktów z dzieckiem po
                rozwodzie.
                Ustalane są wtedy bardzo szczegółowe kwestie takie jak

                -miejsce zamieszkania dziecka
                -sposób i harmonogram kontaktów z dzieckiem (osobistych i z użyciem innych technik
                komunikacji (telefonicznych i internetowych), w tym określenie zasad pokrywania ich kosztów
                -sposobów kontaktów z dzieckiem innych członków rodziny
                -udział w decyzji o rozstrzyganiu o ważnych kwestiach dotyczących dziecka, takie jak wybór
                szkoły profil nauki, zajęcia pozalekcyjne, opieka zdrowotna
                - zasady wychowawcze i system wartości
                - zasady pokrywania kosztów utrzymania dziecka
        `
    }, {
        title: "Mediacje gospodarcze",
        content: `
        Mediacje gospodarcze umożliwiają ugodowe zakończenie sporu zaistniałego między
                przedsiębiorcami, który powstał w związku z prowadzoną przez nich działalnością. W jej
                trakcie strony, w obecności mediatora, przedstawiają swoje stanowiska w sprawie oraz
                propozycje zakończenia sporu.
                Mediacja możliwa jest w sprawach, w których prawo dopuszcza zawarcie ugody, szczególnie
                w sprawach:
                -o zapłatę,
                - wykonanie umów,
                -ustalenie odszkodowań,
                -roszczeń wspólników i akcjonariuszy,
                Nie jest jednak dopuszczalna w postępowaniu nakazowym i upominawczym oraz w
                sprawach o uznanie postanowień wzorca umowy za niedozwolone.
        `
    },
    {
        title: "Mediacje Karne",
        content: `
    do uzupełnienia
`},
    {
        title: "Mediacje pracownicze",
        content: `
        Zawierając umowę o prace zarówno pracownik jak i pracodawca są pełni nadziei i z
                entuzjazmem podejmują współpracę. Jednak w toku tej współpracy mogą wyniknąć
                różne okoliczności, które powodują konflikty i spory.
                Aby uniknąć postępowania sądowego większość spraw pracowniczych można
                rozstrzygnąć na drodze mediacji. Do najczęściej kierowanych spraw należą:
                - załamanie relacji pomiędzy pracownikami, w tym pomiędzy pracownikami i
                przełożonym.
                - naruszenie równego traktowania w miejscu pracy (dyskryminacja, mobbing)
                - wypowiedzenia warunków pracy i płacy
                - rozwiązania umowy o pracę
                - zbiorowych sporów z zakresu prawa pracy
                - konflikty w zarządzie.
        `
    }, {
        title: "Wybór mediatora i przebieg mediacji",
        content: `
        Wybór mediatora –musze coś napisać później )
                Przebieg mediacji

                Etapy przebiegu mediacji
                1. Zgłoszenie sprawy do mediacji.
                Mediacje mogą być kierowane z sądów okręgowych i rejonowych cywilne – rodzinne,
                gospodarcze, pracownicze, oświatowe, społeczne itd. - kierowane są z sądów
                okręgowych i rejonowych (na podstawie postanowienia o skierowaniu sprawy do
                mediacji na wniosek strony/stron lub sędziego) lub prowadzone są na podstawie
                zgłoszenia osób prywatnych, firm, instytucji itd.
                Mediacje karne – kierowane są z sądów (na podstawie postanowienia o skierowaniu
                sprawy do mediacji na wniosek strony/stron lub sędziego), prokuratury, policji .
                Mediacje między nieletnim sprawcą czynu karalnego a pokrzywdzonym – kierowane
                z sądów rodzinnych na podstawie postanowienia o skierowaniu sprawy do mediacji
                na wniosek strony/stron lub sędziego.
                2. Sesje/posiedzenia mediacyjne wstępne - informacyjne
                Prowadzone są zazwyczaj z każdą ze stron osobno. W trakcie tych spotkań,
                mediator informuje strony na czym polega mediacja, jakimi kieruje się zasadami,
                jakie ma cele i jakie mogą osiągnąć korzyści z rozwiązania konfliktu na drodze
                mediacji. Strony potwierdzają dobrowolność swojego uczestnictwa w mediacji.
                Mediator następnie dowiaduje się o tym co jest przedmiotem sporu, oraz jaki jest
                punkt widzenia strony na zaistniałą sytuację. Także jakie według niej muszą zaistnieć
                warunki, aby było możliwe rozwiązanie konfliktu i zawarcie satysfakcjonującej obie
                strony ugody.
                3. Posiedzenia mediacyjne
                Jeśli strony wyrażają gotowość spotkania ze sobą osobiście, dochodzi do sesji
                wspólnej stron przy udziale mediatora. Jeśli któraś ze stron z ważnego dla niej
                powodu nie wyraża zgody na spotkanie bezpośrednie, jednakże dąży do
                porozumienia, istnieje możliwość prowadzenia mediacji pośredniej - wtedy mediator
                spotyka się wyłącznie oddzielnie z każdą ze stron będąc pośrednikiem w
                przekazywaniu punktu widzenia i oczekiwań stron.
                W trakcie posiedzeń mediacyjnych, trwających zwykle 1-2 godzin strony wyjaśniają
                sobie najważniejszych dla nich kwestie oraz wspólnie poszukują rozwiązania
                konfliktu między nimi. Mediatorzy stosują podczas mediacji wiele pomocnych technik
                (m.in. tzw. aktywnego słuchania, wyjaśniania, odzwierciedlania uczuć, a także
                spotkań na osobności), ułatwiających stronom komunikację. Jeśli stronom uda się
                dojść do porozumienia bądź poczynić ustalenia na przyszłość (zależnie od rodzaju
                mediacji) – podpisują ugodę. Liczba posiedzeń mediacyjnych uzależniona jest od
                rodzaju mediacji, można uznać, iż średnio jest ich od 2 do 4.

                4. Podpisywanie ugody
                Stanowi odrębny, istotny etap postępowania mediacyjnego, w którym ważną rolę
                odgrywa właściwe przygotowanie mediatora. Jest on bowiem zobowiązany
                dopilnować realności i konkretności podpisywanego porozumienia. Jeśli stronom nie
                udaje się wypracować satysfakcjonującego je porozumienia, sprawa zostaje
                odesłana do organu, który przesłał sprawę do mediacji, w celu rozstrzygnięcia
                sprawy. W przypadku mediacji tzw. prywatnych stronom pozostaje szukać innych
                sposobów osiągnięcia porozumienia. Mediator zawsze stara się pomóc stronom, w
                uświadomieniu sobie innych możliwości i alternatyw.
        `
    }, {
        title: "Mediacje online",
        content: `
        Pojęcie mediacji online czy e-mediacji odnosi się do mediacji prowadzonej za pomocą
                środków komunikowania się na odległość. Możliwe jest wykorzystanie wideokonferencji,
                komunikatorów internetowych oraz e-maili. Ten typ mediacji polega na tym, że strony nie
                przebywają w tym samym pomieszczeniu a komunikują się ze sobą za pomocą Internetu.
                Warto podkreślić, ze podpisanie koniecznych dokumentów, w tym przede wszystkim ugody,
                może zostać dokonana poprzez wymianę egzemplarzy w trybie art. 78 § 1 kodeksu cywilnego
                lub egzemplarzy opatrzonych kwalifikowanym podpisem elektronicznym.
                Jest to szczególnie korzystne rozwiązanie, gdy jedna ze stron przebywa za granicą lub
                występują inne trudności uniemożliwiające spotkanie.
                Biorąc pod uwagę dzisiejsze coraz szybsze tempo życia wydaje się, że mediacje online będą
                zyskiwały coraz szersze grono zwolenników.
        `
    }
]

let hash = ref()
let route = useRoute()
let selectedHash = ref()

onMounted(() => {
    console.log(route.hash)
    if (!route.hash)
        selectedHash.value = "#0"
    else
        selectedHash.value = route.hash
})
watch(route, async (newHash, oldHash) => {
    // console.log(newHash.hash, oldHash.hash)
    selectedHash.value = newHash.hash || "#0"
    console.log(selectedHash.value)
})
</script>