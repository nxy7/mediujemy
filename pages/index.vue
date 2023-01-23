<template>
    <div class="flex flex-col space-y-7">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
            <div>
                <div class="text-8xl mb-14 text-center">Nasza misja i wartości</div>
                <div class="pl-12">

                    Centrum MediujeMY powstało aby towarzyszyć Wam w trudnych sytuacjach
                    sytuacji można znaleźć wyjście dobre dla obu stron. Zarówno spory sądowe jak i
                    pozasądowe można rozwiązywać w przyjaznej atmosferze współpracy, zaufania,
                    poszanowania granic, uwzględniając emocje drugiej strony.
                    Pracujemy opierając się na fundamentalnych zasadach mediacji: dobrowolności,
                    bezstronności, poufności i szacunku.
                    Nasz zespół to grupa prawników, socjologów i pedagogów. Jako osoby
                    doświadczone zawodowo i życiowo pomożemy Państwu w trudnych kwestiach
                    zarówno życiowych jak i zawodowych, wszędzie tam gdzie pojawia się konflikt,
                    niezrozumienie, potrzeba głębszej współpracy czy poprawy komunikacji.
                    Możemy Państwu pomóc, ponieważ jesteśmy tymi, którzy naprawdę POMAGAJĄ!
                    Wierzymy w ideę mediacji i rozwiązywanie sporów w przyjaznej atmosferze zaufania
                    i bezpieczeństwa.

                </div>

            </div>
            <div class="flex lg:flex-col gap-4 items-center lg:relative -top-8 ">
                <img src="/agnieszka1.jpg" class="rounded-lg w-60 lg:w-120 shadow-md place-self-end" />
                <div class="w-85 lg:w-fit">
                    <div class="mb-1 ml-4 text-md">

                        <span class="italic text-darker">Agnieszka Danieluk - pomysłodawczyni i założycielka
                            <span class="font-semibold">MediujeMy</span>
                        </span>

                    </div>
                    <div class="bg-slate-100 shadow-md rounded-md p-4">

                        Wierzę w ludzi, i uważam, że sami najlepiej wiedzą czego potrzebują. Jako mediator
                        towarzyszę
                        im
                        w drodze do budowania porozumienia poprzez słuchanie i wspieranie w tej drodze

                    </div>
                </div>
            </div>
        </div>
        <div class="text-accent text-2xl font-semibold text-center p-4">
            Zapewniamy Państwu bezpłatne spotkanie konsultacyjne, po którym możecie Państwo podjąć decyzję czy chcecie
            uczestniczyć w mediacji
        </div>

        <div class="flex items-center justify-center space-x-10 py-8">
            <div class="flex">{{ "←" }}</div>
            <div class="flex justify-center w-fit space-x-10 items-center overflow-x-scroll">


                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>

            </div>
            <div class="flex">{{ "→" }}</div>
        </div>


        <div class="flex flex-col">
            <div>Jakie sprawy do mediacji?</div>
            <div>
                Mediację możemy prowadzić we wszystkich sprawach, gdzie występuje potrzeba
                uregulowania kwestii prawnych czy faktycznych. Będą to między innymi sprawy
                cywilne, sprawy zakresu prawa rodzinnego w tym rozwód i separacja, o ustalenie
                opieki nad dzieckiem, o alimenty, sprawy z zakresu prawa gospodarczego w tym o
                zapłatę, spory pracownicze i wiele innych.
                Do trudnych sytuacji, konfliktów czy sporów dochodzi we wszystkich relacjach,
                społeczeństwach i kulturach. Bardzo często powstają one na skutek braku
                komunikacji. Mówimy, ale nie słuchamy drugiej strony, a czasami wręcz nie chcemy
                jej słuchać.
                My jesteśmy tu po to, aby wysłuchać Państwa, usłyszeć Wasz głos i przeprowadzić
                Was przez proces budowania porozumienia z druga stroną.
                Mediacja zakłada, że strony przy pomocy mediatora, czyli neutralnej osoby trzeciej
                poprzez techniki komunikacyjne i odkrycie faktycznych potrzeb stron wypracują
                porozumienie co do zaistniałej sytuacji.
                Niezależnie od tego, czy Państwa sprawa jest już na etapie postepowania sadowego,
                czy jeszcze nie trafiła do sądu mediacje są sposobem rozwiązania Państwa sytuacji.
                Oszczędzicie państwo w ten sposób czas, pieniądze i rozwiążecie sytuację w
                komfortowych warunkach, oraz co jest warte podkreślenia weźmiecie spór we
                własne ręce i zdecydujecie w jaki sposób chcecie go zakończyć.
                Dzięki mediacjom strony mogą zakończyć spór już na pierwszym posiedzeniu
                mediacyjnym
                Nasi mediatorzy pracują na terenie województwa lubelskiego, podsiadamy oddziały
                w Lublinie, Nałęczowie oraz Białej Podlaskiej.
            </div>
            <div>
                Zalety mediacji?
                Najlepiej w formie listy z punktami (nie za długa)
            </div>
            <div class="py-10 m-auto grid grid-cols-2 gap-4 place-items-center justify-center">
                <MediationTypeIcon icon="i-mdi-home-account" subtitle="Mediacje Rodzinne"></MediationTypeIcon>
                <MediationTypeIcon icon="i-mdi-fencing" subtitle="Rozwiązywanie Konfliktów"></MediationTypeIcon>
                <MediationTypeIcon icon="i-mdi-account-voice" subtitle="Poprawa Komunikacji"></MediationTypeIcon>
                <MediationTypeIcon icon="i-mdi-gavel" subtitle="Uregulowanie Kwestii Prawnych">
                </MediationTypeIcon>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center mt-10">
                <MediationCard moreInfoHref="mediacjesadowe">
                    <template v-slot:title>Mediacje sądowe</template>
                    <template v-slot:text>W przypadku mediacji sądowych, są one prowadzone na podstawie postanowienia
                        sądu wydanego z urzędu lub na wiosek każdej ze stron.
                        Zgodnie z kodeksem postepowanie cywilnego istnieje obowiązek próby
                        polubownego rozwiązania sporu przed złożeniem pozwu.
                        Mediacja sądowa charakteryzuje się tym, że ma ustawowo ustalony termin realizacji
                        oraz określone koszty postepowania mediacyjnego.
                        Po przeprowadzeniu mediacji , mediator zobowiązany jest przekazać do sądu
                        protokół mediacji, a jeżeli została zawarta ugoda, również samą ugodę.
                        Po zatwierdzeniu ugody przez sąd ma ona taką samą moc prawną jak wyrok.
                    </template>
                </MediationCard>
                <MediationCard moreInfoHref="mediacje" buttonText="Więcej o mediacjach..">
                    <template v-slot:title>Mediacje pozasądowe</template>
                    <template v-slot:text>
                        W przypadku mediacji pozasądowych to strony same wybierają mediatora zgłaszając
                        się do niego razem, lub jedna ze stron zgłasza się do mediatora i prosi o kontakt w
                        swoim imieniu z drugą stroną.
                        Mediator następnie ustala ze stronami termin spotkanie i miejsce neutralne dla
                        obydwu stron.
                        Argumentem przemawiającym na korzyść mediacji pozasądowej jest szybszy termin
                        zakończenia sprawy, porozumienie jest wypracowane w formie akceptowanej dla
                        obu stron, niższe koszty w porównaniu do postępowań sądowych.
                        Częstą praktyką jest to, iż porozumienie można wypracować już na pierwszym
                        spotkaniu.
                        Podobnie jak w przypadku mediacji sądowych po zatwierdzeniu ugody przez sąd
                        zyskuje ona moc postanowienia sądowego, a w przypadkach dotyczących roszczeń
                        finansowych zostanie nadana klauzula wykonalności.
                    </template>
                </MediationCard>
            </div>
        </div>

    </div>
</template>

