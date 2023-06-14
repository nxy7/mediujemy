<template>
    <div>
        <div class="flex flex-col">

            <div class="flex flex-col py-7 lg:(flex-row py-0) items-center justify-center hero">
                <div class="flex flex-col items-center space-y-8">
                    <div class="text-5xl text-center uppercase font-semibold text-primary">
                        Nasza Misja
                    </div>
                    <div class="md:w-140 space-y-4 text-center">
                        <p>
                            Centrum MediujeMY powstało aby towarzyszyć Wam w trudnych sytuacjach. Nawet w nich 
                            można znaleźć wyjście dobre dla obu stron. Zarówno spory sądowe jak i
                            pozasądowe można rozwiązywać w przyjaznej atmosferze współpracy, zaufania,
                            poszanowania granic, uwzględniając emocje drugiej strony.
                        </p>

                    </div>
                    <a href="kontakt"
                        class="text-xl font-bold px-8 py-3 rounded-md bg-secondary text-white duration-200 hover:(scale-101) active:(scale-98)">
                        Umów bezpłatne spotkanie
                    </a>

                </div>
                <div class="hidden lg:(flex flex-col min-w-1/3 gap-4 justify-center items-center relative)">
                    <img src="/aga1.png" class="rounded-lg lg:h-200 md:place-self-center" />
                </div>
            </div>

            <div :class="'flex flex-col relative ' + sectionPaddings">
                <div class="space-y-4">
                    <div class="text-3xl font-semibold mb-12 text-primary">Zalety mediacji</div>
                    <ul class="space-y-3 list-disc px-3 md:px-20">
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
                <div class="py-10 md:m-auto grid grid-cols-2 gap-4 place-items-center justify-center">
                    <MediationTypeIcon icon="i-mdi-home-account" subtitle="Zadbanie o swoje interesy"></MediationTypeIcon>
                    <MediationTypeIcon icon="i-mdi-fencing" subtitle="Rozwiązywanie Konfliktów"></MediationTypeIcon>
                    <MediationTypeIcon icon="i-mdi-account-voice" subtitle="Poprawa Komunikacji"></MediationTypeIcon>
                    <MediationTypeIcon icon="i-mdi-gavel" subtitle="Uregulowanie Kwestii Prawnych">
                    </MediationTypeIcon>
                </div>
            </div>


            <div :class="'grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center mt-10 bg-primary ' + sectionPaddings">
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

const sectionPaddings = "px-2 py-15 md:px-20 lg:px-50"

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