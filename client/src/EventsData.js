const EventsData = [
    {tickets :"https://www.ticketmaster.com.br/event/afterlife", id : Math.random(),posterImg : "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/857dc8c6-8cf9-4405-9887-f3c2ba6ec1ee/AL-LATAM-2024-LINEUP-_03_1080+x+1350.jpg?format=750w", name : "SAO PAULO 2024", EventDate : "24th February ", description : "Afterlife São Paulo 2024 - Lineup AnnouncedBrazil, a completely immersive, enveloping, and one-of-a-kind encounter lies ahead. On Saturday, 24th of February 2024, São Paulo, Brazil, will host Afterlife for one unmissable night at the Autódromo de Interlagos. Anticipate a transformative event that will captivate the audience to the very last minute. The intricately crafted lineup by Tale Of Us will take the experience to unparalleled realms, with sets from Omnya, Binaryh and ANNA. MRAK will then present his captivating performance of ‘We Don’t Follow’, Cassian will then play B2B with Kevin de Vries before Anyma presents his audiovisual show ‘Genesys’ and Tale Of Us will close out the night. Attendees can expect a hypnotizing blend of musical talent and visual innovation, ensuring a memorable experience." },
    {tickets :"https://www.vividseats.com/afterlife-tickets-key-biscayne-miami-marine-stadium-3-20-2024--concerts-dance-electronica/production/4770822",id : Math.random(),posterImg : "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/5579606c-e688-4f29-9f45-993605267bc9/AFTERLIFE-MIAMI-2024-1080+x+135011080+x+1350.jpg?format=750w", name : "MIAMI MUSIC WEEK 2024", EventDate : "20th March", description : "Afterlife returns to Miami.Experience the return of Afterlife to Miami on March 20th and 21st, immerse yourself in an artistic journey unlike any other at the Miami Marine Stadium. Visually captivating installations, complemented by unparalleled sound, promise an encounter that transcends the ordinary Join us for two unmissable nights where reality shifts and your senses come alive." },
    {tickets :"https://shotgun.live/fr/festivals/afterlife-2024-la-defense-arena",id : Math.random(),posterImg : "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/588f5f79-40c3-4275-a639-89ab6bbf6c21/AL_PARIS__02_1080+x+1350_02_1080+x+1350.jpg?format=750w", name : "PARIS 2024", EventDate : "13th April", description : "Afterlife makes its debut appearance in Paris. On the 13th of April 2024 at the vast Paris La Défense Arena. Featuring an impressive lineup curated by event founders Tale Of Us to complement their own showcase, consisting of Olympe, Recondite (Live), Cassian, and Argy, as well as two special performances, Anyma presents ‘Genesys’ and MRAK presents ‘We Don’t Follow’.Imagine extraordinary auditory landscapes, captivating visuals, and groundbreaking lighting arrangements. Delve into the intricacies of an immersive journey waiting to be discovered." },
    {tickets :"https://arep.co/p/kmla24/finished", id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vZDljMTE5MTRiYTJmYzU3OGRmNzk4MDRkZjZkNzQwYmU2ODQ1ZTZhZi5qcGc=", name : "FRAMEWORK presents KEINEMUSIK Los Angeles 2024", EventDate : "4th May", description : "Keinemusik and Framework are bringing the Peace Kloud to Los Angeles for its' City of Angels debut on May 4th at a to be announced open-air venue. ☮️☁️ Register for pre-sale for first access tickets on Tuesday, February 20th @ 10AM PT before they go live to the public on Wednesday February 21st. Disclaimer: By registering for pre-sale, you are opting in to receive marketing messages from Framework and Keinemusik." },
    {tickets :"https://tickets.extrema.be/?gad_source=1&gclid=CjwKCAiA_tuuBhAUEiwAvxkgTlr2khr-OUYeCIhpfzKVq_kdZi50glkeWKlT4MAUkmat6RP4Hou75BoCqmUQAvD_BwE",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vZDNiNWMxYTNkZTI5YzQ0YzI0M2YxMmM0NjkyYTdlYzkwODAzYzk0Zi5qcGc=", name : "EXTREMA OUTDOOR 2024", EventDate : "17th May", description : "The full lineup for Extrema Outdoor 2024 has been released! Day-by-day program via the website." },
    {tickets :"https://sonar.es/en/tickets",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vOGQzNmIyOGU1YWZiOGQ0YzBlNGE3YTI4NzFhOTA3ZjJiODhiYmJiZi5wbmc=", name : "SONAR BARCELONA", EventDate : "13th June", description : "For its 31st edition the festival doubles down on its reputation for identifying and amplifying the best music from around the world; bringing emerging talent and radical performance aesthetics to Barcelona next June." },
    {tickets :"https://fr.ra.co/events/1860371",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMDNkOTk2NWE3MzEzZWM0NzAwY2MzNzkzYjhlYmUxM2E5NWMzZWJlYi5qcGc=", name : " OFFWEEK BARCELONA AFTERLIFE 2024", EventDate : "15th June", description : "Event founders Tale Of Us are set to return with Afterlife to Barcelona for OFFWEEK 2024.On Saturday, the 15th of June, at the Parc del Fòrum, ignite your senses and delve into the immersive Afterlife experience. The event begins with showcases from 19:26, Kasia and Recondite (Live). This will be followed by exciting back-to-back sets by Chris Avantgarde B2B Rebuke and Argy B2B Kevin De Vries. As the evening progresses, there will be two exhilarating special performances, Anyma presents ‘Genesys’, and MRAK presents ‘We Don’t Follow’ before Tale Of Us come together to deliver a momentous finale." },
    {tickets :"https://www.awakenings.com/en/events/2024/07/awakenings-summer-festival-2024/287901/",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vMzk0YWMzNGQ5MGUzYzdkNTEzYzQzODA0OTZjNmMzM2RkYzRjZjExYS5wbmc=", name : "AWAKENINGS SUMMER FESTIVAL 2024", EventDate : "5th July", description : "It’s that time of the year! Your ultimate techno holiday is back: Awakenings Summer Festival at Hilvarenbeek will take place on July 5, 6 & 7, 2024. Save the date & tell your friends!" },
    {tickets :"https://store.kappafuturfestival.it/events/kappa-futurfestival-2024-9270/tickets?",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vYzhlMTY1M2UyZTEzYmVmZDE5ODM0YmZjNjk2NGI1YzM0N2FiMTllMy5qcGc=", name : "KAPPA FUTUR FESTIVAL 2024", EventDate : "5th July" , description : " Kappa FuturFestival is the leading summer outdoor dance music festival in Italy. Since 2014 it is regularly among the 10 main European summer festivals and among the Top 11 in the world according to DJ Mag.In September 2019 it received the Best International Festival prize at the Ibiza DJ Awards. KFF is the only Italian festival featured in the Festivals guide, distributed by Hachette, which reviewed the 50 Best Music Festivals of all time. Kappa FuturFestival has firmly established itself as the most significant cultural event in the city of Torino, making a substantial contribution to the sector's economy with its widespread origins and repercussions. Its status as one of the primary cultural tourist attractions in the region, only behind Museo Egizio, Juventus, Salone del Libro and the ATP Finals, is now universally acknowledged. The economic outcome of the Territory is estimated at € 30 million. KFF has now become an unmissable event - among the most important in Europe - capable of attracting a large number of spectators from all over the world and bringing together a great cultural multitude under one roof. In 2023 the Festival was awarded the 11th World Best Festival by DJMag." },
    {tickets :"https://www.sonus-festival.com/book/tickets/",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNzAyN2YxYjg3M2FkNzJlY2ZmNjc5NmFiY2YzYjVjYTE2Yjc3ZTdkMC5wbmc=", name : "SONUS FESTIVAL 2024", EventDate : "18th August", description : "18th to 22th of August 2024 - Pag Island 5 days & nights of open air party at the Croatian sea. Imagine your favourite artists playing open air, just a few steps away from the beach. Envision yourself taking a dip in the crystal clear Adriatic Sea in between parties. Sounds like a dream? Well, at Sonus it all comes true: Your perfect summer rave adventure happens right on the shores of Croatia." },
    {tickets :"https://loveland.nl/festival/festival-tickets",id : Math.random(),posterImg : "https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9pbWFnZXMucmEuY28vNWZhMTY4YzhmY2I2ODlhNzA2M2U1NGFlZGQ4NGIyZGE5NDhjMTBhYS5wbmc=", name : "LOVELAND FESTIVAL 2024", EventDate : "10th August", description : " Loveland Festival returns in 2024! Join us on the dance floor for another 2-day celebration of house and techno music! See you in 2024! Loveland crew" },
    {tickets :"https://shotgun.live/fr/festivals/afterlife-2024-theatre-antique-d-orange",id : Math.random(),posterImg : "https://images.squarespace-cdn.com/content/v1/6195288d4315b3125cd7af80/122129a9-5fd9-4916-b23c-1eee05b2ccf6/AFTERLIFE-ORANGE-2024-_08_1080+x+1350.jpg?format=750w", name : "ORANGE 2024", EventDate : "25th August", description : " Afterlife is set to return to Orange, showcasing at the iconic Roman UNESCO World Heritage Site, Théâtre Antique d'Orange. The performances will span two exceptional nights, on Saturday the 24th and Sunday the 25th of August 2024. Saturday's show will feature 19:26, Olympe and Maceo Plex. The evening will also include the inventive, astounding performance MRAK presents 'We Don't Follow'. Sunday's showcase consists of productions by Eynka, Chris Avantgarde and Argy, as well as a remarkable, immersive performance of Anyma presents 'Genesys'. Event founders Tale Of Us will close both days, complementing the prodigious collective of talent performing alongside them. The venue's historical significance adds a distinctive allure, and the site-specific production ensures an Afterlife experience like no other, complete with entrancing visuals, cutting-edge technologies and dynamic soundscapes." },

]

export default EventsData