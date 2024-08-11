import{_ as x}from"./CYbACT06.js";import{j as h,A as M,B as v,i as l,v as b,C as f,o as n,c as p,a as s,t as _,l as J,n as m,u as t,D as W,h as B,F as j,r as k,g as u,w as g,d as H}from"./B6KgxsjR.js";const S=["id"],$={class:"text-center text-xl font-semibold"},C={class:"p-2"},P=h({__name:"expandable",props:{title:{},id:{},open:{type:Boolean}},setup(y){let a=y,e=M({open:a.open,contentHeight:0});const i=v();function c(){e.open=!e.open,e.open&&i.push({hash:`#${a.id}`})}const r=l(null);return b(()=>{var o,z;console.log("elo"),e.contentHeight=((o=r.value)==null?void 0:o.scrollHeight)||0,console.log((z=r.value)==null?void 0:z.scrollHeight)}),f(()=>a.open,o=>{e.open=o}),(o,z)=>(n(),p("div",{onClick:c,class:m("flex flex-col -scroll-mt-30 overflow-hidden p-6 rounded-md group hover:bg-slate-100"+(t(e).open,"")),id:o.id},[s("div",$,_(o.title),1),s("div",{class:m("overflow-hidden duration-300 "+(t(e).open?"":"!max-h-0")),ref_key:"content",ref:r,style:W(`max-height: ${t(e).contentHeight||1e3}px`)},[s("div",C,[J(o.$slots,"default")])],6)],10,S))}}),T={class:"flex flex-col md:flex-row md:px-30 space-x-6 mt-10"},L={class:"hidden md:sticky md:top-20 md:flex flex-col space-y-2 self-start"},N={class:"flex flex-col space-y-1"},D=["innerHTML"],A=h({__name:"mediacje",setup(y){let a=[{title:"Czym jest mediacja",content:`
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
    `},{title:"Mediacje sądowe i pozasądowe",content:`
                <p>
    Można wyróżnić dwa rodzaje mediacji: sądową oraz pozasądową.
    </p>
    <p>
    Na pierwszą z nich strony
                sporu są kierowane na podstawie postanowienia sądu już po wniesieniu pozwu czy
                wniosku wszczynającego postępowanie, natomiast mediacje pozasądowe mają miejsce w
                sytuacji, gdy sprawa nie jest jeszcze rozpatrywana przez sąd wówczas mediację rozpoczyna
                się na wniosek jednego z jej uczestników. Co istotne, ugoda zawarta podczas mediacji
                zarówno w trakcie postępowania sądowego, jak i poza nim może zostać zatwierdzona przez
                sąd, dzięki czemu na jej podstawie będzie można prowadzić ewentualną egzekucja.
                </ p>
                Wśród korzyści płynących z mediacji w pierwszej kolejności warto wymienić to, że w czasie
                jej trwania strony mogą próbować wspólnie wypracować rozwiązanie, które zostanie
                zaakceptowane przez każdą z nich. Jest to o tyle istotne, że w postępowaniu sądowym
                decyzja jest wydawana przez sąd i zazwyczaj przynajmniej jedna ze stron jest z niej
                niezadowolona. Mediacja jest niejawna, co oznacza, że zarówno mediator, jak i strony mają
                obowiązek zachować w tajemnicy wszystko, o czym się podczas niej dowiedzieli. Zaletą
                mediacji jest też jej niesformalizowany charakter atmosfera jest bardziej swobodna niż w
                sądzie, gdzie obowiązują pewne ramy procesowe.
    </p>
    <p>

                Bardzo istotną zaletą jest też obecność mediatora, który ma za zadanie zapewnić
                uczestnikom mediacji profesjonalne wsparcie m.in. poprzez udzielanie im głosu, zadawanie
                pytań, a także pilnowanie, aby ich rozmowa nie przerodziła się w kłótnię. Mediator jest
                bezstronny, czyli nie opowiada się za żadną ze stron. Jest też neutralny w stosunku do
                przedmiotu mediacji, co oznacza, że nie ma dla niego znaczenia, jakie rozwiązanie ustalą
                strony. Mediator nie zajmuje się ustaleniem tego, kto ma rację, nie narzuca też stronom
                rozwiązania, lecz pomaga im dojść do konsensusu.
    </p>
    <p>

                Mediacje są dobrowolne, jednak należy mieć na uwadze treść przepisu art. 187 § 1 pkt 3
                kodeksu postępowania cywilnego, który zobowiązuje do podania w pozwie informacji, czy
                strony podjęły próbę mediacji lub innego pozasądowego sposobu rozwiązania sporu, a jeśli
                tego nie uczyniły do wyjaśnienia dlaczego tak się stało. Ponadto przepisy k.p.c. zobowiązują
                sąd do dążenia do ugodowego rozwiązania sprawy, w szczególności do nakłaniania stron do
                mediacji. Dlatego coraz częściej można się spotkać z tym, że sądy kierują uczestników
                postępowania do mediacji.
    </p>
    <p>

                Zanim skierujemy sprawę do sądu warto rozważyć mediację, która zwiększa szanse na
                szybkie uzyskanie przez nas korzystnego rozstrzygnięcia, minimalizując przy tym koszty
                postępowania. Wprawdzie wymaga ona od nas dobrej woli, polegającej na chęci
                porozumienia się z drugą stroną i pójścia na ewentualne ustępstwa, jednak warto pamiętać,
                że pod wieloma względami mediacja może być dla nas korzystniejszym rozwiązaniem niż
                postępowanie sądowe.
    </p>
    `},{title:"Mediacje cywilne",content:`
        <p>
        Mediacja może być prowadzona we wszystkich sprawach cywilnych, w których
                dopuszczalne jest zawarcie ugody, tj. w sprawach, w których wynik postępowania jest
                zależny od woli stron.
                </p>
                <p>
                Jako przykład mediacji w postepowaniu cywilnym można podać sprawy:
                <ul>
                <li>- o zapłatę</li>
                <li>- o zniesienie współwłasności</li>
                <li>- o dział spadku</li>
                <li>- podział majątku wspólnego</li>
                </ul>
                I wiele innych jeżeli podlegają regulacji kodeksu cywilnego
                </p>
        `},{title:"Mediacje rodzinne i okołorozwodowe",content:`
        W sprawach o rozwód i separację, jeżeli istnieją widoki, na utrzymanie małżeństwa
                przedmiotem mediacji może być pojednanie małżonków
                Jeżeli jednak do pojednania nie dojdzie, celem mediacji może być ugodowe rozwiązanie
                kwestii dotyczących:
                <ul>
                <li>- zaspokojenia potrzeb rodziny</li>
                <li>- alimentów</li>
                <li>- sposobu sprawowania władzy rodzicielskiej</li>
                <li>- kontaktów z dziećmi</li>
                </ul>
                Ważnym elementem mediacji rodzinnych jest opracowanie przez strony porozumienia o
                sposobie wykonywania władzy rodzicielskiej i utrzymywania kontaktów z dzieckiem po
                rozwodzie.
                Ustalane są wtedy bardzo szczegółowe kwestie takie jak

                <ul>
                <li>- miejsce zamieszkania dziecka</li>
                <li>- sposób i harmonogram kontaktów z dzieckiem (osobistych i z użyciem innych technik komunikacji (telefonicznych i internetowych), w tym określenie zasad pokrywania ich kosztów</li>
                <li>- sposobów kontaktów z dzieckiem innych członków rodziny</li>
                <li>- udział w decyzji o rozstrzyganiu o ważnych kwestiach dotyczących dziecka, takie jak wybór szkoły profil nauki, zajęcia pozalekcyjne, opieka zdrowotna</li>
                <li>- zasady wychowawcze i system wartości</li>
                <li>- zasady pokrywania kosztów utrzymania dziecka</li>
                </ul>
        `},{title:"Mediacje gospodarcze",content:`
        <p>
        Mediacje gospodarcze umożliwiają ugodowe zakończenie sporu zaistniałego między
                przedsiębiorcami, który powstał w związku z prowadzoną przez nich działalnością. W jej
                trakcie strony, w obecności mediatora, przedstawiają swoje stanowiska w sprawie oraz
                propozycje zakończenia sporu.</p>
                <p>
                Mediacja możliwa jest w sprawach, w których prawo dopuszcza zawarcie ugody, szczególnie
                w sprawach:
                <ul>
                <li>- o zapłatę,</li>
                <li>- wykonanie umów,</li>
                <li>- ustalenie odszkodowań,</li>
                <li>- roszczeń wspólników i akcjonariuszy,</li>
                </ul>
                Nie jest jednak dopuszczalna w postępowaniu nakazowym i upominawczym oraz w
                sprawach o uznanie postanowień wzorca umowy za niedozwolone.
                </p>
        `},{title:"Mediacje pracownicze",content:`
        <p>
            Zawierając umowę o prace zarówno pracownik jak i pracodawca są pełni nadziei i z
            entuzjazmem podejmują współpracę. Jednak w toku tej współpracy mogą wyniknąć
            różne okoliczności, które powodują konflikty i spory.
            Aby uniknąć postępowania sądowego większość spraw pracowniczych można
            rozstrzygnąć na drodze mediacji. Do najczęściej kierowanych spraw należą:
        <ul>
            <li>- załamanie relacji pomiędzy pracownikami, w tym pomiędzy pracownikami i przełożonym.</li>
            <li>- naruszenie równego traktowania w miejscu pracy (dyskryminacja, mobbing)</li>
            <li>- wypowiedzenia warunków pracy i płacy</li>
            <li>- rozwiązania umowy o pracę</li>
            <li>- zbiorowych sporów z zakresu prawa pracy</li>
            <li>- konflikty w zarządzie.</li>
        </ul>
        `},{title:"Wybór mediatora i przebieg mediacji",content:`
            <p>
            Przebieg mediacji
            </p>

            <p>
            Etapy przebiegu mediacji
            </p>
            <ul>
                <li class="font-semibold">Zgłoszenie sprawy do mediacji.</li>
                <li>Mediacje mogą być kierowane z sądów okręgowych i rejonowych cywilne – rodzinne,
                gospodarcze, pracownicze, oświatowe, społeczne itd. - kierowane są z sądów
                okręgowych i rejonowych (na podstawie postanowienia o skierowaniu sprawy do
                mediacji na wniosek strony/stron lub sędziego) lub prowadzone są na podstawie
                zgłoszenia osób prywatnych, firm, instytucji itd.</li>
                <li>Mediacje karne – kierowane są z sądów (na podstawie postanowienia o skierowaniu
                sprawy do mediacji na wniosek strony/stron lub sędziego), prokuratury, policji .</li>
                <li>Mediacje między nieletnim sprawcą czynu karalnego a pokrzywdzonym – kierowane
                z sądów rodzinnych na podstawie postanowienia o skierowaniu sprawy do mediacji
                na wniosek strony/stron lub sędziego.</li>
            </ul>
            <li class="font-semibold">Sesje/posiedzenia mediacyjne wstępne - informacyjne</li>
            <ul>
                <li>Prowadzone są zazwyczaj z każdą ze stron osobno. W trakcie tych spotkań,
                mediator informuje strony na czym polega mediacja, jakimi kieruje się zasadami,
                jakie ma cele i jakie mogą osiągnąć korzyści z rozwiązania konfliktu na drodze
                mediacji. Strony potwierdzają dobrowolność swojego uczestnictwa w mediacji.
                Mediator następnie dowiaduje się o tym co jest przedmiotem sporu, oraz jaki jest
                punkt widzenia strony na zaistniałą sytuację. Także jakie według niej muszą zaistnieć
                warunki, aby było możliwe rozwiązanie konfliktu i zawarcie satysfakcjonującej obie
                strony ugody.</li>
            </ul>
            <li class="font-semibold">Posiedzenia mediacyjne</li>
            <ul>
                <li>Jeśli strony wyrażają gotowość spotkania ze sobą osobiście, dochodzi do sesji
                wspólnej stron przy udziale mediatora. Jeśli któraś ze stron z ważnego dla niej
                powodu nie wyraża zgody na spotkanie bezpośrednie, jednakże dąży do
                porozumienia, istnieje możliwość prowadzenia mediacji pośredniej - wtedy mediator
                spotyka się wyłącznie oddzielnie z każdą ze stron będąc pośrednikiem w
                przekazywaniu punktu widzenia i oczekiwań stron.</li>
                <li>W trakcie posiedzeń mediacyjnych, trwających zwykle 1-2 godzin strony wyjaśniają
                sobie najważniejszych dla nich kwestie oraz wspólnie poszukują rozwiązania
                konfliktu między nimi. Mediatorzy stosują podczas mediacji wiele pomocnych technik
                (m.in. tzw. aktywnego słuchania, wyjaśniania, odzwierciedlania uczuć, a także
                spotkań na osobności), ułatwiających stronom komunikację. Jeśli stronom uda się
                dojść do porozumienia bądź poczynić ustalenia na przyszłość (zależnie od rodzaju
                mediacji) – podpisują ugodę. Liczba posiedzeń mediacyjnych uzależniona jest od
                rodzaju mediacji, można uznać, iż średnio jest ich od 2 do 4.</li>
            </ul>
            <li class="font-semibold">Podpisywanie ugody</li>
            <ul>
                <li>Stanowi odrębny, istotny etap postępowania mediacyjnego, w którym ważną rolę
                odgrywa właściwe przygotowanie mediatora. Jest on bowiem zobowiązany
                dopilnować realności i konkretności podpisywanego porozumienia. Jeśli stronom nie
                udaje się wypracować satysfakcjonującego je porozumienia, sprawa zostaje
                odesłana do organu, który przesłał sprawę do mediacji, w celu rozstrzygnięcia
                sprawy. W przypadku mediacji tzw. prywatnych stronom pozostaje szukać innych
                sposobów osiągnięcia porozumienia. Mediator zawsze stara się pomóc stronom, w
                uświadomieniu sobie innych możliwości i alternatyw.</li>
            </ul>
        `},{title:"Mediacje online",content:`
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
        `}];l();let e=B(),i=l();return b(()=>{console.log(e.hash),e.hash?i.value=e.hash:i.value="#0"}),f(e,async(c,r)=>{i.value=c.hash||"#0",console.log(i.value)}),(c,r)=>{const o=x,z=P;return n(),p("div",T,[s("div",L,[(n(!0),p(j,null,k(t(a),(d,w)=>(n(),u(o,{class:"p-2 rounded-md hover:bg-slate-100 w-55 text-center",href:`#${w}`},{default:g(()=>[H(_(d.title),1)]),_:2},1032,["href"]))),256))]),s("div",N,[(n(!0),p(j,null,k(t(a),(d,w)=>(n(),u(z,{title:d.title,id:w.toString(),open:`#${w.toString()}`==t(i)},{default:g(()=>[s("div",{innerHTML:d.content,class:"flex flex-col gap-2"},null,8,D)]),_:2},1032,["title","id","open"]))),256))])])}}});export{A as default};
