<template>
    <div>
        <!-- <div class="relative flex flex-col h-[80vh] shadow-inner items-center justify-center overflow-hidden">
            <div ref="imageRef" class="absolute w-full h-[150%] -top-10 -z-1" bg="[url(/bg2.jpeg)] center cover"></div>
            <div style="font-family: 'Open Sans', sans-serif;"
                class="px-8 md:px-0 text-white mt-50 text-7xl font-medium drop-shadow-lg text-center">
                Porozumienie bez
                barier
            </div>
        </div> -->
        <div class="flex flex-col">

            <div class="flex flex-col lg:flex-row items-center justify-center hero">
                <div class="flex flex-col items-center space-y-8">
                    <div class="text-5xl text-center uppercase font-semibold">
                        Nasza Misja
                    </div>
                    <div class="md:w-140 space-y-4 text-center">
                        <p>
                            Centrum MediujeMY powstało aby towarzyszyć Wam w trudnych sytuacjach
                            sytuacji można znaleźć wyjście dobre dla obu stron. Zarówno spory sądowe jak i
                            pozasądowe można rozwiązywać w przyjaznej atmosferze współpracy, zaufania,
                            poszanowania granic, uwzględniając emocje drugiej strony.
                        </p>

                        <!-- <p>
                            Pracujemy opierając się na fundamentalnych zasadach mediacji: dobrowolności,
                            bezstronności, poufności i szacunku.
                        </p> -->
                        <!-- <p>
                            Nasz zespół to grupa prawników, socjologów i pedagogów. Jako osoby
                            doświadczone zawodowo i życiowo pomożemy Państwu w trudnych kwestiach
                            zarówno życiowych jak i zawodowych, wszędzie tam gdzie pojawia się konflikt,
                            niezrozumienie, potrzeba głębszej współpracy czy poprawy komunikacji.
                            Możemy Państwu pomóc, ponieważ jesteśmy tymi, którzy naprawdę POMAGAJĄ!
                            Wierzymy w ideę mediacji i rozwiązywanie sporów w przyjaznej atmosferze zaufania
                            i bezpieczeństwa.

                        </p> -->
                    </div>
                    <a href="kontakt"
                        class="text-xl font-bold px-8 py-3 rounded-md bg-light duration-200 hover:(bg-claret text-white)">
                        Umów bezpłatne spotkanie
                    </a>

                </div>
                <div class="hidden lg:(flex flex-col min-w-1/3 gap-4 justify-center items-center relative)">
                    <img src="/aga1.png" class="rounded-lg lg:h-200 md:place-self-center" />
                </div>
            </div>
            <!-- <div class="flex flex-col items-center space-y-4">
                <div class="text-primary text-2xl font-semibold text-center md:max-w-220">
                    Zapewniamy Państwu bezpłatne spotkanie konsultacyjne, po którym możecie podjąć decyzję czy
                    chcecie uczestniczyć w mediacji
                </div>

                <a href="kontakt"
                    class="text-xl font-bold px-8 py-3 rounded-md bg-light duration-200 hover:(bg-claret text-white)">
                    Umów spotkanie
                </a>
            </div> -->

            <!-- <div class="flex items-center justify-center space-x-10 py-8">
            <div class="flex">{{ "←" }}</div>
            <div class="flex justify-center w-fit space-x-10 items-center overflow-x-scroll">


                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>

            </div>
            <div class="flex">{{ "→" }}</div>
        </div> -->


            <div :class="'flex flex-col relative ' + sectionPaddings">
                <div class="space-y-4">
                    <div class="text-3xl font-semibold mb-12">Zalety mediacji</div>
                    <ul class="space-y-3 list-disc px-4 md:px-20">
                        <li>
                            Mediacja jest znacznie krótsza od tradycyjnego postępowania sądowego. Możecie Państwo podpisać
                            ugodę już na pierwszym spotkaniu mediacyjnym.
                        </li>
                        <li>
                            Mediacja jest co do zasady dużo tańsza od postępowania sądowego.
                        </li>
                        <li> Macie Państwo realny wpływ na wynik ugody i nie jesteście uzależnieni od woli organu sądowego.
                        </li>
                        <li>
                            Mediacja przerywa bieg przedawnienia roszczenia co oznacza, że wszczęcie i prowadzenie mediacji
                            nie stanowi ryzyka braku późniejszej możliwości dochodzenia żądania na drodze sądowej.
                        </li>
                        <li>
                            Zatwierdzona przez sąd ugoda mediacyjna ma moc ugody sadowej.
                        </li>
                        <li>
                            Mediacja pozwala Państwu na rozwiązanie sporu w spokojnej atmosferze, przyjaznych warunkach z
                            poszanowaniem Waszych uczuć i emocji.
                        </li>
                        <li>
                            Mediacja pozwala na utrzymanie lub wznowienie kontaktów, które będą lub powinny trwać w
                            przyszłości,
                            czy to w odniesieniu do sfery życia rodzinnego, gospodarczego, zawodowego lub innych.
                        </li>
                    </ul>
                </div>
                <!-- <div class="space-y-2">
                <p>
                    Mediację możemy prowadzić we wszystkich sprawach, gdzie występuje potrzeba
                    uregulowania kwestii prawnych czy faktycznych. Będą to między innymi sprawy
                    cywilne, sprawy zakresu prawa rodzinnego w tym rozwód i separacja, o ustalenie
                    opieki nad dzieckiem, o alimenty, sprawy z zakresu prawa gospodarczego w tym o
                    zapłatę, spory pracownicze i wiele innych.

                </p>
                <p>
                    Do trudnych sytuacji, konfliktów czy sporów dochodzi we wszystkich relacjach,
                    społeczeństwach i kulturach. Bardzo często powstają one na skutek braku
                    komunikacji. Mówimy, ale nie słuchamy drugiej strony, a czasami wręcz nie chcemy
                    jej słuchać.

                </p>
                <p>
                    My jesteśmy tu po to, aby wysłuchać Państwa, usłyszeć Wasz głos i przeprowadzić
                    Was przez proces budowania porozumienia z druga stroną.
                    Mediacja zakłada, że strony przy pomocy mediatora, czyli neutralnej osoby trzeciej
                    poprzez techniki komunikacyjne i odkrycie faktycznych potrzeb stron wypracują
                    porozumienie co do zaistniałej sytuacji.

                </p>
                <p>
                    Niezależnie od tego, czy Państwa sprawa jest już na etapie postepowania sadowego,
                    czy jeszcze nie trafiła do sądu mediacje są sposobem rozwiązania Państwa sytuacji.
                    Oszczędzicie państwo w ten sposób czas, pieniądze i rozwiążecie sytuację w
                    komfortowych warunkach, oraz co jest warte podkreślenia weźmiecie spór we
                    własne ręce i zdecydujecie w jaki sposób chcecie go zakończyć.

                </p>
                <p>
                    Dzięki mediacjom strony mogą zakończyć spór już na pierwszym posiedzeniu
                    mediacyjnym
                    Nasi mediatorzy pracują na terenie województwa lubelskiego, podsiadamy oddziały
                    w Lublinie, Nałęczowie oraz Białej Podlaskiej.

                </p>
            </div> -->
                <div class="py-10 md:m-auto grid grid-cols-2 gap-4 place-items-center justify-center">
                    <MediationTypeIcon icon="i-mdi-home-account" subtitle="Zadbanie o swoje interesy"></MediationTypeIcon>
                    <MediationTypeIcon icon="i-mdi-fencing" subtitle="Rozwiązywanie Konfliktów"></MediationTypeIcon>
                    <MediationTypeIcon icon="i-mdi-account-voice" subtitle="Poprawa Komunikacji"></MediationTypeIcon>
                    <MediationTypeIcon icon="i-mdi-gavel" subtitle="Uregulowanie Kwestii Prawnych">
                    </MediationTypeIcon>
                </div>


            </div>



            <div :class="'grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center mt-10 bg-light ' + sectionPaddings">
                <MediationCard moreInfoHref="mediacje#1">
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
                <MediationCard moreInfoHref="mediacje#1">
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

            <div :class="sectionPaddings">
                <EmailForm></EmailForm>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useParalax } from '~~/components/useParalax';

const sectionPaddings = "px-7 py-15 md:px-60"

const imageRef = ref(null)
useParalax(imageRef)
</script>

<style>
.hero {
    background-repeat: repeat;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e4e4e4' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
}
</style>