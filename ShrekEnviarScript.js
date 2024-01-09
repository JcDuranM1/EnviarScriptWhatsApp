async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("No hay una conversación abierta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
SHREK

Escrito por

William Steig y Ted Elliott




SHREK
Érase una vez una hermosa
princesa. Pero ella tenía un encantamiento.
sobre ella de un tipo terrible que podría
Sólo se romperá con el primer beso del amor.
Fue encerrada en un castillo vigilado
por un terrible dragón que escupe fuego.
Muchos valientes caballeros habían intentado
libérala de esta espantosa prisión,
pero no prevaleció. Ella esperó en el
torreón del dragón en la habitación más alta de
la torre más alta para su verdadero amor
y el primer beso del verdadero amor. (risas)
Como si eso alguna vez fuera a pasar. Qué
una carga de - (descarga del inodoro)

Allstar - de Smashmouth comienza a sonar. Shrek se ocupa de su
día. Mientras están en un pueblo cercano, los aldeanos se reúnen para ir
tras el ogro.

NOCHE - CERCA DE LA CASA DE SHREK

HOMBRE1
¿Crees que está ahí?

MAN2
Está bien. ¡Consigámoslo!

HOMBRE1
Vaya. Esperar. ¿Sabes qué es eso?
¿Qué te puedo hacer?

MAN3
Sí, te triturará los huesos porque es
pan.

Shrek se acerca sigilosamente detrás de ellos y se ríe.

SHREK
Sí, bueno, en realidad, eso sería un
gigante. Ahora, ogros, son mucho peores.
Te harán un traje recién
piel pelada.

HOMBRES
¡No!

SHREK
Te afeitarán el hígado. Aprieta el
gelatina de tus ojos! En realidad, es
bastante bueno con tostadas.

HOMBRE1
¡Atrás! ¡Atrás, bestia! ¡Atrás! ¡Te lo advierto!
(agita la antorcha hacia Shrek.)

Shrek se lame los dedos tranquilamente y apaga la antorcha. El
los hombres se alejan de él. Shrek ruge muy fuerte y durante mucho tiempo.
y su aliento apaga todas las antorchas restantes hasta que el
los hombres están en la oscuridad.

SHREK
Esta es la parte en la que huyes.
(Los hombres se apresuran a escapar. Él se ríe.)
¡Y quédate fuera! (mira hacia abajo y recoge
hasta un trozo de papel. Lee.) "Se busca.
Criaturas de cuento de hadas." (Suspira y
tira el papel por encima del hombro.)


EL DÍA SIGUIENTE

Hay una línea de criaturas de cuento de hadas. el jefe de la guardia
se sienta en una mesa pagando a la gente por traer las criaturas de cuento de hadas
a él. Hay jaulas por todas partes. Algunas de las personas en la fila
son Peter Pan, que lleva a Tinkerbell en una jaula, Gipetto
que lleva a Pinocho, y un granjero que lleva a los tres
cerditos.

GUARDIA
Está bien. Éste está lleno. Tómalo
¡lejos! Muévelo. ¡Vamos! ¡Levantarse!


JEFE DE GUARDIA
¡Próximo!

GUARDIA
(tomando la escoba de bruja) ¡Dame eso!
Tus días de vuelo han terminado. (rompe el
escoba por la mitad)

JEFE DE GUARDIA
Son 20 piezas de plata para la bruja.
¡Próximo!

GUARDIA
¡Levantarse! ¡Vamos!

JEFE DE GUARDIA
Veinte piezas.

OSITO
(llorando) Esta jaula es demasiado pequeña.

BURRO
Por favor, no me entregues. Nunca lo haré.
volver a ser terco. Puedo cambiar. ¡Por favor!
¡Dame otra oportunidad!

ANCIANA
Callate. (mueve su cuerda)

BURRO
¡Oh!

JEFE DE GUARDIA
¡Próximo! ¿Qué tienes?

GIPETTO
Esta pequeña marioneta de madera.

PINOCHO
No soy una marioneta. Soy un chico de verdad. (su
la nariz crece)

JEFE DE GUARDIA
Cinco chelines por el juguete poseído.
Llevatelo.

PINOCHO
¡Padre, por favor! ¡No dejes que hagan esto!
¡Ayúdame!

Gipetto toma el dinero y se marcha. La anciana se acerca
a la mesa.

JEFE DE GUARDIA
¡Próximo! ¿Qué tienes?

ANCIANA
Bueno, tengo un burro que habla.

JEFE DE GUARDIA
Bien. Bueno, eso vale por diez chelines.
si puedes probarlo.

ANCIANA
Oh, adelante, pequeño amigo.

Burro simplemente la mira.

JEFE DE GUARDIA
¿Bien?

ANCIANA
Oh, oh, él es sólo... es sólo un poco
nervioso. Es realmente un gran charlatán.
Habla, idiota estúpido...

JEFE DE GUARDIA
Eso es todo. Ya he oído suficiente. ¡Guardias!


ANCIANA
¡No, no, él habla! Lo hace. (finge
ser burro) Puedo hablar. me encanta
hablar. Soy la maldita cosa que más habla
alguna vez viste.

JEFE DE GUARDIA
Sácala de mi vista.

ANCIANA
¡No no! ¡Lo juro! ¡Oh! ¡Él puede hablar!

Los guardias agarran a la anciana y ella lucha con ellos. Uno
de sus piernas sale volando y patea a Campanilla fuera de Peter Pan.
manos, y su jaula cae sobre la cabeza de Burro. el se rocía
con polvo de hadas y puede volar.

BURRO
¡Ey! ¡Puedo volar!

PETER PAN
¡Él puede volar!

3 cerditos
¡Él puede volar!

JEFE DE GUARDIA
¡Él puede hablar!

BURRO
¡Ja ja! ¡Así es, tonto! Ahora soy
un burro volador y parlante. tu podrías
He visto una mosca doméstica, tal vez incluso una supermosca.
pero apuesto a que nunca has visto un burro
volar. ¡Ja ja! (El polvo de hadas comienza
para desaparecer) Uh-oh. (comienza a hundirse
al suelo.)

Golpea el suelo con un ruido sordo.

JEFE DE GUARDIA
¡Agarradlo! (El burro empieza a correr.)
¡Despues de el!

GUARDIAS
¡Se está escapando! ¡Cosiguele! ¡Por aquí!
¡Doblar!

Donkey sigue corriendo y finalmente se encuentra con Shrek. Literalmente.
Shrek se da vuelta para ver quién chocó con él. El burro parece asustado
Por un momento ve a los guardias que se acercan por el camino. Él
Se esconde rápidamente detrás de Shrek.

JEFE DE GUARDIA
Tú allí. ¡Ogro!

SHREK
¿Sí?

JEFE DE GUARDIA
Por orden de Lord Farquaad estoy autorizado
para arrestarlos a ambos y transportarlos
a un centro de reasentamiento designado.


SHREK
¿Ah, de verdad? ¿Tú y qué ejército?

Mira detrás del guardia y el guardia se gira para mirar también.
y vemos que los otros hombres se han escapado. El guardia mete la cola.
y sale corriendo. Shrek se ríe y vuelve a sus asuntos y
comienza a caminar de regreso a su cabaña.

BURRO
¿Puedo decirte algo? Escuchar,
Eras realmente, realmente, realmente algo
aquí atrás. ¡Increíble!

SHREK
¿Estás hablando con... (se da vuelta)
y Burro se ha ido) ¿yo? (se vuelve
alrededor y Donkey está justo enfrente
de él.) ¡Vaya!

BURRO
Sí. Estaba hablando contigo. Puedo decirlo
tu que tu que estuviste genial de regreso
¿aquí? ¡Esos guardias! Ellos pensaron que
fue todo eso. Entonces apareciste,
y ¡bam! Estaban tropezando consigo mismos
como bebés en el bosque. Esto realmente
Me hizo sentir bien ver eso.

SHREK
Oh eso es genial. En realidad.

BURRO
Hombre, es bueno ser libre.

SHREK
Ahora, ¿por qué no vas a celebrar tu
¿Libertad con tus propios amigos? ¿Mmm?


BURRO
Pero no tengo amigos. Y
No voy a salir solo. Ey,
¡espera un minuto! ¡Tengo una gran idea! Enfermo
me quedo contigo. Eres malo, verde,
máquina de pelear. juntos vamos a asustar
el escupitajo de cualquiera que cruce
a nosotros.

Shrek se da vuelta y mira a Burro por un momento antes de rugir muy
fuerte.

BURRO
¡Oh, vaya! Eso fue realmente aterrador. Si usted
No te importe que te lo diga, si eso no es así.
trabajo, tu aliento ciertamente se recuperará
el trabajo hecho, porque definitivamente
Necesito algunos Tic Tacs o algo así, porque
¡Tu aliento apesta! casi te quemas
el pelo de mi nariz, al igual que el
tiempo...(Shrek se tapa la boca pero Burro
continúa hablando, por lo que Shrek elimina
su mano.) ...entonces comí algo podrido
bayas. Me salían gases fuertes
fuera de mi trasero ese día.

SHREK
¿Por qué me estás siguiendo?

BURRO
Te diré por qué. (cantando) Porque
Estoy completamente solo, no hay nadie aquí al lado.
Yo, todos mis problemas se han ido, hay
Nadie que se burle de mí, pero tienes que tener
fe...

SHREK
¡Deja de cantar! No es de extrañar que no lo hagas
tener amigos.

BURRO
Guau. Sólo un verdadero amigo sería ese.
cruelmente honesto.

SHREK
Escucha, burrito. Echa un vistazo a
a mí. ¿Qué soy yo?

BURRO
(mira completamente a Shrek) Uh...de verdad.
¿alto?

SHREK
¡No! ¡Soy un ogro! Sabes. "Toma tu
antorchas y horcas." ¿No es eso lo que
¿molestarte?

BURRO
No.

SHREK
¿En realidad?

BURRO
En serio en serio.

SHREK
Oh.

BURRO
Hombre, me gustas. ¿Cómo te llamas?

SHREK
Ah, Shrek.

BURRO
¿Shrek? Bueno, ya sabes lo que me gusta
¿Tú, Shrek? Tienes ese tipo de "no me importa lo que nadie piense de mí".
cosa. Me gusta eso. Respeto eso,
Shrek. Estás bien. (Ellos vienen
una colina y puedes ver la cabaña de Shrek.)
¡Vaya! Mira eso. ¿Quién querría vivir?
en un lugar así?

SHREK
Ese sería mi hogar.

BURRO
¡Oh! ¡Y es encantador! Simplemente hermoso.
Sabes que eres todo un decorador.
Es sorprendente lo que has hecho con tales
un presupuesto modesto. Me gusta esa roca.
Esa es una bonita roca. Creo que tu
No entretienes mucho, ¿verdad?

SHREK
Me gusta mi privacidad.

BURRO
Ya sabes, yo también. Esa es otra cosa
tenemos en común. Como odio cuando
Tienes a alguien en tu cara. Tienes
tratando de darles una pista, y ellos
no se irá. Hay un silencio incómodo.
(silencio incómodo) ¿Puedo quedarme contigo?


SHREK
¿Cómo?

BURRO
¿Puedo quedarme contigo, por favor?

SHREK
(sarcásticamente) ¡Por supuesto!

BURRO
¿En realidad?

SHREK
No.

BURRO
¡Por favor! ¡No quiero volver allí!
No sabes lo que es ser
considerado un fenómeno. (pausa mientras él
mira a Shrek) Bueno, tal vez sí.
Pero es por eso que debemos mantenernos unidos.
¡Tienes que dejarme quedarme! ¡Por favor! ¡Por favor!


SHREK
¡Bueno! ¡Bueno! Pero sólo una noche.

BURRO
¡Ah! ¡Gracias! (corre dentro de la cabaña)


SHREK
Qué vas a...? (El burro salta sobre
una silla.) ¡No! ¡No!

BURRO
¡Esto va a ser divertido! podemos quedarnos despiertos
tarde, intercambiando historias varoniles, y en
Por la mañana estoy haciendo gofres.

SHREK
¡Oh!

BURRO
¿Dónde duermo?

SHREK
(irritado) ¡Afuera!

BURRO
Oh, bueno, supongo que eso está bien. Quiero decir,
No te conozco y tu no lo sabes
yo, así que supongo que afuera es mejor, tú
saber. Aquí voy. Buenas noches. (Shrek
cierra la puerta.) (suspiro) Quiero decir, lo hago
como el aire libre. Soy un burro. Era
nacido afuera. solo estaré sentado
Yo afuera, supongo, ya sabes. Por
Yo mismo, afuera. Estoy completamente solo... hay
nadie aquí a mi lado...

CASA DE SHREK - NOCHE

Shrek se está preparando para cenar. Se sienta y enciende
una vela hecha con cerumen. Comienza a comer cuando escucha un
ruido. Se levanta con un resoplido.

SHREK
(a Burro) Creí haberte dicho que
mantenerse fuera.

BURRO
(desde la ventana) Estoy afuera.

Hay otro ruido y Shrek se gira para encontrar a la persona que
hizo el ruido. Ve varias sombras moviéndose. finalmente se vuelve
y ve 3 ratones ciegos en su mesa.

RATÓN CIEGO1
Bueno, caballeros, está muy lejos de
granja, pero ¿qué opción tenemos?


RATÓN CIEGO2
No es mi hogar, pero estará bien.


GORDO
(rebotando sobre una babosa) Qué cama más bonita.


SHREK
Te tengo. (Agarra un ratón, pero se escapa.
y aterriza sobre su hombro.)

GORDO
Encontré un poco de queso. (muerde a Shrek
oreja)

SHREK
¡Ay!

GORDO
¡Paja! Cosas horribles.

RATÓN CIEGO1
¿Eres tú, Gordo?

GORDO
¿Como supiste?

SHREK
¡Suficiente! (agarra los 3 ratones) ¿Cuáles son?
haces en mi casa? (Lo golpean
desde atrás y deja caer los ratones.)
¡Ey! (Se da vuelta y ve a los Siete Enanitos.
con Blancanieves en la mesa.) Oh, no,
no no. Mujer muerta fuera de la mesa.


ENANO
¿Dónde se supone que debemos ponerla? El
La cama está ocupada.

SHREK
¿Eh?

Shrek se dirige al dormitorio y corre la cortina.
El lobo feroz está sentado en la cama. El lobo solo mira
a él.

GRAN LOBO MALO
¿Qué?

LAPSO DE TIEMPO

Shrek ahora tiene al Lobo Feroz por el cuello y lo arrastra
él hasta la puerta principal.

SHREK
Vivo en un pantano. Puse carteles. Soy
¡Un ogro aterrador! ¿Qué tengo que hacer?
¿Tienes un poco de privacidad? (Él abre el
puerta de entrada para echar al lobo y
ve que todo el Hada recogida
Las criaturas de cuento están en su tierra.) Oh,
No. ¡No! ¡No!

Los 3 osos están sentados alrededor del fuego, el flautista toca su
tubería y las ratas corren hacia él, algunos elfos están dirigiendo
tráfico aéreo para que las hadas y brujas puedan aterrizar...etc.


SHREK
¿Qué haces en mi pantano? (este
resuena y todos se quedan en silencio.)


Se escuchan jadeos por todas partes. Las 3 hadas buenas se esconden dentro de un
carpa.

SHREK
Muy bien, sal de aquí. Todos ustedes,
¡Muévelo! ¡Vamos! ¡Vamos! ¡Hapaya!
¡Hapaya! ¡Ey! Rápidamente. ¡Vamos! (más
los enanos corren dentro de la casa) ¡No, no!
No no. No ahí. No ahí. (ellos
cerrarle la puerta) ¡Oh! (se vuelve hacia
mira burro)

BURRO
Oye, no me mires. yo no invité
a ellos.

PINOCHO
Dios mío, nadie nos invitó.

SHREK
¿Qué?

PINOCHO
Nos vimos obligados a venir aquí.

SHREK
(asombrado) ¿Por quién?

PEQUEÑO CERDO
Señor Farquaad. Él resopló y resopló
y él... firmó un aviso de desalojo.


SHREK
(suspiro profundo) Está bien. quien sabe donde
¿Este tipo Farquaad es?

Todos se miran pero nadie responde.

BURRO
Oh, lo hago. Sé dónde está.

SHREK
¿Alguien más sabe dónde encontrar?
¿a él? ¿Alguien en absoluto?

BURRO
¡A mí! ¡A mí!

SHREK
¿Alguien?

BURRO
¡Oh! ¡Elígeme! ¡Oh, lo sé! ¡Lo sé!
¡Yo, yo!

SHREK
(suspiro) Está bien, está bien. Atención, todo hada.
cosas de cuento. No te pongas cómodo.
Su bienvenida está oficialmente agotada.
De hecho, voy a ver a este tipo, Farquaad.
ahora mismo y sacarlos a todos de mi tierra
¡Y de regreso de donde vienes! (Pausa.
Entonces la multitud se vuelve loca.) ¡Oh! (al burro)
¡Tú! Vas a venir conmigo.

BURRO
Muy bien, eso es lo que me gusta escuchar.
hombre. Shrek y Burro, dos incondicionales
amigos, en una gran ciudad vertiginosa
aventura. ¡Me encanta!

BURRO
(cantando) De nuevo en el camino. Cantarlo
conmigo, shrek. no puedo esperar para conseguir
en la carretera de nuevo.

SHREK
¿Qué dije sobre cantar?

BURRO
¿Puedo silbar?

SHREK
No.

BURRO
¿Puedo tararearlo?

SHREK
Muy bien, tararea.

Donkey comienza a tararear 'On the Road Again'.

DULOC - COCINA

Un hombre enmascarado está torturando al Hombre de Jengibre. el esta continuamente
mojándolo en un vaso de leche. Lord Farquaad entra.

FARQUAAD
Eso es suficiente. Está listo para hablar.


Sacan al hombre de jengibre de la leche y lo arrojan al suelo.
en una bandeja para hornear galletas. Farquaad se ríe mientras camina hacia el
mesa. Sin embargo cuando llega a la mesa vemos que va
hasta sus ojos. Se aclara la garganta y bajan la mesa.


FARQUAAD
(levanta las piernas del Hombre de Jengibre
y juega con ellos) Corre, corre, corre,
tan rapido como puedas. no puedes atrapar
a mí. Soy el hombre de jengibre.

HOMBRE DE PAN DE JENGIBRE
Eres un monstruo.

FARQUAAD
Yo no soy el monstruo aquí. Eres. Tú
y el resto de esa basura de cuento de hadas,
envenenando mi mundo perfecto. Habla
¡a mí! ¿Donde están los otros?

HOMBRE DE PAN DE JENGIBRE
¡Cómeme! (Escupe leche en el rostro de Farquaad.
ojo.)

FARQUAAD
He tratado de ser justo con ustedes, criaturas.
¡Ahora mi paciencia ha llegado a su fin!
Dímelo o yo... (hace como si quisiera
quítale los botones al Hombre de Jengibre)


HOMBRE DE PAN DE JENGIBRE
No, no, los botones no. No es mi gomita
botones.

FARQUAAD
De acuerdo entonces. ¿Quién los esconde?


HOMBRE DE PAN DE JENGIBRE
Está bien, te lo diré. Sabe usted la
¿hombre panecillo?

FARQUAAD
¿El hombre de los panecillos?

HOMBRE DE PAN DE JENGIBRE
El hombre de los panecillos.

FARQUAAD
Sí, conozco al hombre de los panecillos, que vive
¿En Drury Lane?

HOMBRE DE PAN DE JENGIBRE
Bueno, está casada con el hombre de los panecillos.


FARQUAAD
¿El hombre de los panecillos?

HOMBRE DE PAN DE JENGIBRE
¡El hombre de los panecillos!

FARQUAAD
Está casada con el hombre de los panecillos.

La puerta se abre y entra el jefe de guardia.

JEFE DE GUARDIA
¡Mi señor! Lo encontramos.

FARQUAAD
¿Entonces que estás esperando? Traer
ITIN.

Entran más guardias llevando algo que está cubierto por una sábana.
Cuelga lo que sea y quita la sábana. es la magia
Espejo.

HOMBRE DE PAN DE JENGIBRE
(asombrado) Ohhhh...

FARQUAAD
Espejo mágico...

HOMBRE DE PAN DE JENGIBRE
¡No le digas nada! (Farquaad elige
lo levanta y lo arroja a un bote de basura
con tapa.) ¡No!

FARQUAAD
Noche. Espejo Espejo en la pared.
¿No es este el reino más perfecto?
¿de todos ellos?

ESPEJO
Bueno, técnicamente no eres un rey.


FARQUAAD
Ah, Telonio. (Telonio sostiene un
espejo de mano y lo rompe con su
puño.) ¿Estabas diciendo?

ESPEJO
Lo que quiero decir es que aún no eres rey.
Pero puedes convertirte en uno. Todo lo que usted tiene
Lo que hay que hacer es casarse con una princesa.

FARQUAAD
Seguir.

ESPEJO
(se ríe nerviosamente) Así que siéntate
y relájate, mi señor, porque es hora
para que conozcas a las solteras elegibles de hoy.
¡Y aquí están! numero de despedida de soltera
uno es un recluso que sufre abuso mental
un reino muy, muy lejano. a ella le gusta el sushi
y jacuzzi en cualquier momento. Sus pasatiempos
incluir cocinar y limpiar para ella
dos hermanas malvadas. Por favor, denle la bienvenida a Cenicienta.
(muestra foto de Cenicienta) Despedida de soltera
La número dos es una chica con capa de
la tierra de la fantasía. aunque ella vive
con otros siete hombres, no es fácil.
Sólo besa sus labios muertos y congelados y
descubre qué cable tan vivo es ella. Venir
en. ¡Déjalo por Blancanieves! (muestra
foto de Blancanieves) Y por último, pero
Ciertamente no es el último, número de despedida de soltera.
tres es una pelirroja ardiente de un dragón custodiado
castillo rodeado de lava hirviendo!
Pero no dejes que eso te enfríe. ella es
una pistola cargada a la que le gustan las piñas coladas
y quedar atrapado bajo la lluvia. Tuyo
¡Por el rescate, princesa Fiona! (Muestra
foto de la princesa Fiona) Así será
ser despedida de soltera número uno, despedida de soltera
¿La número dos o la despedida de soltera número tres?


GUARDIAS
¡Dos! ¡Dos! ¡Tres! ¡Tres! ¡Dos! ¡Dos! ¡Tres!


FARQUAAD
¿Tres? ¿Uno? ¿Tres?

TELONIO
¡Tres! (levanta 2 dedos) Elige el número
tres, mi señor!

FARQUAAD
Está bien, está bien, ¡número tres!

ESPEJO
Lord Farquaad, has elegido Princesa.
Fiona.

FARQUAAD
Princesa Fiona. Ella es perfecta. todo yo
Lo que tienes que hacer es encontrar a alguien que
puede ir...

ESPEJO
Pero probablemente debería mencionar el pequeño
cosa que pasa por la noche.

FARQUAAD
Lo haré.

ESPEJO
Sí, pero después del atardecer...

FARQUAAD
¡Silencio! Haré esta princesa Fiona.
mi reina, y DuLoc finalmente tendrá
el rey perfecto! Capitán, reúnase
tus mejores hombres. Vamos a tener
un torneo. (sonríe malvadamente)

Estacionamiento DuLoc - Sección Lancelot

Shrek y Burro salen del campo que está justo al lado del parking.
lote. El castillo en sí tiene unos 40 pisos de altura.

BURRO
Pero eso es todo. Eso es todo ahí mismo.
Ese es DuLoc. Te dije que lo encontraría.


SHREK
Entonces, ese debe ser el castillo de Lord Farquaad.


BURRO
UH Huh. Ese es el lugar.

SHREK
¿Crees que tal vez esté compensando?
¿para algo? (Se ríe, pero luego
gime porque Donkey no entiende el chiste.
Continúa caminando por el estacionamiento.
lote.)

BURRO
Hey, espera. Espera, Shrek.

HOMBRE
Date prisa, cariño. Llegamos tarde. Apurarse.


SHREK
¡Eh, tú! (El asistente, que lleva puesto
una cabeza gigante que se parece a Lord Farquaad,
grita y comienza a correr por el
Filas de cuerdas para llegar a la puerta principal.
para alejarse de Shrek.) Espera un segundo.
Mira, no te voy a comer. Yo solo
- - Yo sólo - - (Suspira y luego comienza
caminando directamente entre las filas. El
El asistente choca contra una pared y cae.
abajo. Shrek y Burro lo miran entonces.
continúe hasta DuLoc.)

DULOC

Miran a su alrededor pero todo está en silencio.

SHREK
Esta calmado. Muy silencioso. ¿Donde está todo el mundo?


BURRO
¡Oye, mira esto!

Burro corre y tira de una palanca que está unida a una caja
marcado como 'Información'. La música termina y luego las puertas del palco.
abrir. Dentro hay personitas de madera y empiezan
cantar.

PERSONAS DE MADERA
Bienvenido a DuLoc, una ciudad tan perfecta.


Aquí tenemos algunas reglas.

Dejémoslos caer

No hagas olas, mantente en línea

Y nos llevaremos bien

DuLoc es el lugar perfecto

Por favor manténgase alejado del césped.

Lustra tus zapatos, límpiate... la cara.

DuLoc es, DuLoc es

DuLoc es el lugar perfecto.

De repente, una cámara toma una fotografía de Donkey y Shrek.

BURRO
¡Guau! ¡Hagámoslo de nuevo! (prepara
correr y tirar de la palanca nuevamente)


SHREK
(agarra la cola del burro y lo mantiene quieto)
¡No no no no no! No.

Escuchan una fanfarria de trompetas y se dirigen a la arena.

FARQUAAD
Valientes caballeros. Eres el mejor y
más brillante en toda la tierra. hoy uno
de ti se probará a sí mismo...

Mientras Shrek y Donkey caminan por el túnel para entrar a la arena.
Donkey está tarareando el tema musical de DuLoc.

SHREK
Está bien. Vas por el camino correcto
por un trasero golpeado.

BURRO
Lo lamento.

FARQUAAD
Ese campeón tendrá el honor...
- no, no - - el privilegio de salir
y rescatar a la encantadora princesa Fiona
del castillo de fuego del dragón. Si
por cualquier motivo el ganador no tiene éxito,
el primer finalista ocupará su lugar
y así sucesivamente y así sucesivamente. Algo de ti
Puede morir, pero es un sacrificio. Estoy dispuesto.
para hacer. (aplausos) Que el torneo
¡comenzar! (Se fija en Shrek) ¡Oh! Qué es
¿eso? ¡Es horrible!

SHREK
(se gira para mirar a Donkey y luego regresa
en Farquaad) Ah, eso no es muy agradable.
Es sólo un burro.

FARQUAAD
En efecto. Caballeros, ¡nuevo plan! El que
¡Mata al ogro y serás nombrado campeón!
¡Tenlo él!

HOMBRES
¡Cosiguele!

SHREK
¡Oh hola! ¡Ahora ven! Espera ahora. (golpes
en una mesa donde hay tazas de
cerveza)

MULTITUD
¡Adelante! ¡Cosiguele!

SHREK
(sostiene una jarra de cerveza) ¿No podemos simplemente
¿Resolver esto con una pinta?

MULTITUD
¡Mata a la bestia!

SHREK
¿No? De acuerdo entonces. (bebe la cerveza)
¡Vamos!

Toma la taza y rompe el grifo del gran barril.
de cerveza detrás de él. La cerveza sale corriendo empapando el
otros hombres y mojando el suelo. Es como barro ahora. toboganes shrek
Pasa junto a los hombres y recoge una lanza que uno de los hombres dejó caer.
Cuando Shrek comienza a luchar, Burro salta a uno de los más grandes.
barriles de cerveza. Se libera de sus cuerdas y comienza a rodar.
Burro logra aplastar a dos hombres contra el barro. Hay tanto
Aquí no voy a entrar en detalles sobre las peleas que están ocurriendo aquí. Satisfacer
decir que Shrek patea traseros.

BURRO
¡Oye, Shrek, etiquétame! ¡Etiquetame!

Shrek se acerca y golpea la cabeza de un hombre contra los burros. shrek
se sube a las cuerdas e interactúa con la multitud.

SHREK
¡Sí!

Un hombre intenta acercarse sigilosamente detrás de Shrek, pero Shrek se da vuelta a tiempo.
y lo ve.

MUJER
¡La silla! ¡Dale la silla!

Shrek rompe una silla sobre la espalda de los chicos. Finalmente todos los hombres
están abajo. El burro patea a uno de ellos en el casco y el ding
Suena el final del partido. El público se vuelve loco.

SHREK
¡Oh sí! ¡Ah! ¡Ah! ¡Gracias! Gracias
¡mucho! Estoy aquí hasta el jueves. Intentar
la ternera! ¡Ja ja! (risas)

La risa se detiene cuando todos los guardias encienden sus armas.
Shrek.

JEFE DE GUARDIA
¿Le doy la orden, señor?

FARQUAAD
No, tengo una idea mejor. Gente de
¡DuLoc, te presento a nuestro campeón!

SHREK
¿Qué?

FARQUAAD
Felicitaciones, ogro. Has ganado el
honor de embarcarnos en una gran y noble
búsqueda.

SHREK
¿Búsqueda? Ya estoy en una búsqueda, una búsqueda
para recuperar mi pantano.

FARQUAAD
¿Tu pantano?

SHREK
¡Sí, mi pantano! ¿Dónde tiraste esos?
criaturas de cuento de hadas!

FARQUAAD
En efecto. Muy bien, ogro. Te haré
un trato. Sigue esta búsqueda por mí y
Te devolveré tu pantano.

SHREK
¿Exactamente como era?

FARQUAAD
Hasta el último hongo cubierto de baba.


SHREK
¿Y los okupas?

FARQUAAD
Casi desaparecido.

SHREK
¿Qué tipo de búsqueda?

Lapso de tiempo: Burro y Shrek ahora caminan por el campo.
alejándose de DuLoc. Shrek está masticando una cebolla.

BURRO
Déjame entenderlo. Tú vas a
Ve a luchar contra un dragón y rescata a una princesa.
solo para que Farquaad te devuelva
un pantano que solo no tienes porque
lo llenó de monstruos en la primera
lugar. ¿Es eso cierto?

SHREK
Sabes, tal vez haya una buena razón
Los burros no deberían hablar.

BURRO
No lo entiendo. ¿Por qué no simplemente tiras?
¿Alguna de esas cosas de ogro sobre él? Acelerador
él, sitiar su fortaleza, muele
sus huesos para hacer vuestro pan, el conjunto
viaje de ogro.

SHREK
Ah, ya sé qué. tal vez podría haber
decapitó a un pueblo entero y puso
sus cabezas en una pica, consiguieron un cuchillo,
abrirles el bazo y beber su
fluidos. ¿Eso suena bien para usted?


BURRO
Uh, no, realmente no, no.

SHREK
Para tu información, hay mucho
más a los ogros de lo que la gente piensa.

BURRO
¿Ejemplo?

SHREK
¿Ejemplo? Vale, los ogros son como cebollas.
(Le tiende la cebolla)

BURRO
(huele la cebolla) ¿Apestan?

SHREK
¡Sí No!

BURRO
¿Te hacen llorar?

SHREK
¡No!

BURRO
Los dejas al sol, se ponen
Todo marrón, empieza a brotar un poco de blanco.
pelos.

SHREK
¡No! ¡Capas! Las cebollas tienen capas. Ogros
tener capas! Las cebollas tienen capas. Tú
¿Consíguelo? Ambos tenemos capas. (él levanta
un suspiro y luego se aleja)

BURRO
(siguiendo a Shrek) Oh, ustedes dos
tener capas. Oh. {Olfatea} Ya sabes,
No a todo el mundo le gustan las cebollas. ¡Pastel! Todos
ama los pasteles! Los pasteles tienen capas.

SHREK
No me importa... lo que le guste a cada uno.
Los ogros no son como los pasteles.

BURRO
¿Sabes qué más le gusta a todo el mundo?
Parfaits. ¿Alguna vez has conocido a una persona,
dices: "Vamos a tomar un parfait", ellos
decir: "Diablos, no, no me gusta el parfait"?
Los parfaits son deliciosos.

SHREK
¡No! Eres denso, irritante, miniatura.
¡bestia de carga! ¡Los ogros son como cebollas!
Y de historia. Adiós. Te veo luego.


BURRO
Los parfaits pueden ser lo más delicioso
en todo el maldito planeta.

SHREK
Sabes, creo que prefería tu tarareo.


BURRO
¿Tienes un pañuelo o algo así? Soy
haciendo un lío. Sólo la palabra parfait
hazme empezar a babear.

Se marchan. Hay un montaje de su viaje. Caminando por
un campo al atardecer. Dormir bajo una luna brillante. shrek intentando
apagar la fogata al día siguiente y tener un pequeño problema,
Entonces Burro orina en el fuego para apagarlo.

MANTENIMIENTO DEL DRAGÓN

Shrek y Burro caminan hacia el torreón que se supone debe
casa Princesa Fiona. Parece un volcán gigante.


BURRO
(olfatea) ¡Ohh! ¡Shrek! ¿Hiciste eso?
Tienes que advertir a alguien antes de simplemente
romper uno. Mi boca estaba abierta y
todo.

SHREK
Créeme, Burro, si fuera yo, lo harías.
muerete. (olfatea) Es azufre. Nosotros
debe estar acercándose.

BURRO
Sí, claro, azufre. no hables
acerca de que es el azufre. yo se que
Yo huelo. No fue azufre. Él
Tampoco salió ninguna piedra.


Suben por la ladera del volcán/mantén y miran hacia abajo. Allá
Hay un pequeño trozo de roca justo en el centro y ahí es donde
el castillo es. Está rodeado de lava hirviendo. Se ve muy
presentimiento.

SHREK
Claro, es lo suficientemente grande, pero mira el
ubicación. (risas... luego la risa se vuelve
en un gemido)

BURRO
¿Shrek? Uh, recuerda cuando dijiste
¿Los ogros tienen capas?

SHREK
Ah, sí.

BURRO
Bueno, tengo una pequeña confesión
hacer. Los burros no tienen capas. Nosotros
llevar nuestro miedo ahí fuera en nuestro
mangas.

SHREK
Espera un segundo. Los burros no tienen mangas.


BURRO
Usted sabe lo que quiero decir.

SHREK
No puedes decirme que tienes miedo a las alturas.


BURRO
No, solo estoy un poco incómodo.
acerca de estar en un puente desvencijado
¡un hervor como de lava!

SHREK
Vamos, burro. Estoy aquí al lado
ya, ¿vale? Para apoyo emocional, lo haremos
solo abordemos esto juntos uno
pequeño paso a paso.

BURRO
¿En realidad?

SHREK
En serio en serio.

BURRO
Vale, eso me hace sentir mucho mejor.


SHREK
Sigue moviéndote. Y no mires hacia abajo.


BURRO
Está bien, no mires hacia abajo. No mires hacia abajo.
No mires hacia abajo. Sigue moviéndote. No
mira abajo. (Pasa por un camino podrido
tablero y termina mirando hacia abajo
en la lava) ¡Shrek! ¡Estoy mirando hacia abajo!
¡Dios mío, no puedo hacer esto! Sólo déjame
¡Fuera, por favor!

SHREK
Pero ya estás a mitad de camino.

BURRO
¡Pero sé que la mitad está a salvo!

SHREK
Bien vale. No tengo tiempo para esto.
Usted vaya de regreso.

BURRO
¡Shrek, no! ¡Esperar!

SHREK
Sólo, burro - - Vamos a bailar
entonces, ¿quiero? (rebota y balancea el
puente)

BURRO
¡No hagas eso!

SHREK
Oh lo siento. ¿Hacer lo? ¿Oh esto? (rebota
el puente otra vez)

BURRO
¡Si, eso!

SHREK
¿Sí? Sí, hazlo. Bueno. (continúa
rebota y se balancea mientras hace retroceder a Donkey.
el puente)

BURRO
¡No, Shrek! ¡No! ¡Para!

SHREK
¡Dijiste que lo hagas! Lo estoy haciendo.

BURRO
Me voy a morir. Me voy a morir. shrek,
Me voy a morir. (pisa tierra firme)
¡Oh!

SHREK
Eso es suficiente, Burro. Eso servirá. (camina
hacia el castillo)

BURRO
Fresco. Entonces, ¿dónde está este escupe fuego?
¿Dolor en el cuello de todos modos?

SHREK
Dentro, esperando que la rescatemos.
(risas)

BURRO
Estaba hablando del dragón, Shrek.


DENTRO DEL CASTILLO

BURRO
¿Tienes miedo?

SHREK
No.

BURRO
Pero...

SHREK
Shh.

BURRO
Oh Dios. Yo tampoco. (ve un esqueleto
y jadea) Porque no hay nada malo
con tener miedo. El miedo es sensato
respuesta a una situación desconocida.
Situación peligrosa desconocida, podría
agregar. Con un dragón que escupe fuego
y come caballeros y escupe fuego,
seguro que no significa que seas un cobarde
si tienes un poco de miedo. Estoy seguro que
Diablos, no soy ningún cobarde. Yo sé eso.


SHREK
Burro, dos cosas, ¿vale? Callarse la boca.
Ahora ve allí y mira si puedes.
encontrar alguna escalera.

BURRO
¿Escaleras? Pensé que estábamos buscando
la princesa.

SHREK
(poniéndose un casco) La princesa
estar subiendo las escaleras en la habitación más alta
en la torre más alta.

BURRO
¿Qué te hace pensar que ella estará ahí?


SHREK
Lo leí en un libro una vez. (se va)


BURRO
Fresco. Tú manejas al dragón. yo me encargaré
las escaleras. Encontraré esas escaleras.
Les azotaré el trasero también. esas escaleras
No sabrá hacia dónde van.
(se va)

HABITACIÓN VACÍA

Donkey sigue hablando solo mientras mira alrededor de la habitación.


BURRO
Voy a tomar medidas drásticas. Patearla
a la acera. No te metas conmigo. Soy
el maestro de escaleras. He dominado el
escaleras. Ojalá tuviera un paso aquí.
Lo pisotearía.

EN OTRA PARTE

Shrek ve una luz en la ventana más alta de la torre.

SHREK
Bueno, al menos sabemos dónde está la princesa.
es, pero ¿dónde está el...?

BURRO
(os) ¡Dragón!

Burro jadea y sale corriendo mientras el dragón ruge de nuevo.
Shrek logra apartar a Burro del camino justo cuando el dragón
respira fuego.

SHREK
¡Burro, cuidado! (logra conseguir
un agarre de la cola del dragón y sostiene
encendido) ¡Te tengo!

El dragón se irrita por esto y mueve su cola y Shrek
sale volando por el aire y se estrella contra el techo del
torre más alta. Fiona se despierta con un sobresalto y lo mira tumbado.
en el piso.

BURRO
¡Oh! ¡Ah! ¡Ah!

El burro queda acorralado cuando el Dragón derriba a todos menos a un pequeño
parte del puente en el que se encuentra.

BURRO
No. ¡Oh, no, no! (el dragón ruge) Oh,
Que dientes tan grandes tienes. (el dragón
gruñe) Me refiero a dientes blancos y brillantes.
Sé que probablemente escuches esto todo el tiempo
de tu comida, pero debes usar lejía,
Porque esa es una sonrisa deslumbrante.
Llegamos allí. ¿Detecto un toque de menta?
¿frescura? ¿Y sabes qué más? Estás
- - ¡Eres una niña dragón! ¡Oh, por supuesto!
Quiero decir, por supuesto que eres una niña dragón.
Simplemente apestas a belleza femenina.
(El dragón comienza a mover los ojos.
a él) ¿Qué te pasa?
¿Tienes algo en el ojo? Oh.
Oh. Oh. Hombre, realmente me encantaría quedarme.
pero ya sabes, yo soy, uh...(el dragón
sopla un anillo de humo en forma de
corazón directo hacia él y tose) Estoy
un asmático, y no sé si sería
averigua si vas a echar humo
anillos. ¡Shrek! (el dragón lo recoge
levanta con los dientes y se lo lleva)
¡No! ¡Shrek! ¡Shrek! ¡Shrek!

HABITACIÓN DE FIONA

Shrek gime mientras se levanta del suelo. Está de espaldas a Fiona.
entonces se arregla el vestido y se recuesta en la cama. Ella
luego rápidamente se acerca y quita el ramo de flores.
la mesa auxiliar. Luego se vuelve a tumbar y parece estar dormida.
Shrek se da vuelta y se acerca a ella. Él mira a Fiona por
Un momento y ella frunce los labios. Shrek la toma por los hombros
y la sacude.

FIONA
¡Oh! ¡Oh!

SHREK
¡Despertar!

FIONA
¿Qué?

SHREK
¿Eres la princesa Fiona?

FIONA
Estoy esperando a un caballero tan audaz como para
rescatarme.

SHREK
Oh eso es agradable. ¡Ahora vámonos!

FIONA
Pero espere, señor caballero. Esto es nuestro
primera cita. ¿No debería ser maravilloso,
momento romantico?

SHREK
Sí, lo siento, señora. No hay tiempo.


FIONA
Hey, espera. ¿Qué estás haciendo? Debería
Arrastrame por esa ventana
y baja por una cuerda hasta tu valiente corcel.


SHREK
Has tenido mucho tiempo para planificar esto.
¿no?

FIONA
(sonríe) Mm-hmm.

Shrek rompe la cerradura de su puerta y la tira hacia afuera y hacia abajo.
el pasillo.

FIONA
¡Pero tenemos que saborear este momento! Tú
Podría recitarme un poema épico. A
¿balada? ¡Un soneto! ¿Una quintilla? ¡O algo!


SHREK
No me parece.

FIONA
¿Puedo al menos saber el nombre de mi campeón?


SHREK
Ah, Shrek.

FIONA
Señor Shrek. (se aclara la garganta y sostiene
saca un pañuelo) Rezo para que
Toma este favor como muestra de mi gratitud.


SHREK
¡Gracias!

De repente oyen rugir al dragón.

FIONA
(sorprendido) ¿No mataste al dragón?


SHREK
Está en mi lista de cosas por hacer. ¡Ahora ven!
(Echa corriendo y arrastra a Fiona detrás.
a él.)

FIONA
¡Pero esto no está bien! estabas destinado
para cargar, espada desenvainada, estandarte ondeando.
Eso es lo que hicieron todos los demás caballeros.


SHREK
Sí, justo antes de que estallaran en llamas.


FIONA
Ese no es el punto. (Shrek de repente
se detiene y ella corre hacia él.) ¡Oh! (Shrek
La ignora y se dirige hacia una puerta de madera.
a un lado.) Espera. Dónde estás
¿yendo? La salida está por ahí.

SHREK
Bueno, tengo que salvar mi trasero.

FIONA
¿Qué clase de caballero eres?

SHREK
Único en su clase. (abre la puerta hacia
la sala del trono)

BURRO
(os) Más despacio. Más despacio, cariño, por favor.
Creo que es saludable conocer
alguien durante un largo período de tiempo.
Sólo llámame anticuado. (risas
preocupado) (lo vemos de cerca y
desde la distancia mientras Shrek se cuela
la habitación) No quiero apresurarme
una relación física. no estoy emocionalmente
Listo para un compromiso de, uh, esto.
- - Magnitud realmente es la palabra que soy.
Buscando. Magnitud- - Oye, eso
es contacto físico no deseado. Hey que
¿estás haciendo? Bien bien. solo vamos
retrocede un poco y da este paso
a la vez. Realmente deberíamos llegar a conocer
unos a otros primero como amigos o amigos por correspondencia.
Viajo mucho, pero me encanta
recibir tarjetas - - Me encantaría mucho
quedarse, pero... - ¡No hagas eso! Eso es
mi cola! Esa es mi cola personal. Estás
lo arrancaré. no doy permiso
- - ¿Qué vas a hacer con eso?
Ahora. De ninguna manera. ¡No! ¡No! ¡No no! No.
No no no. ¡No! ¡Oh!

Shrek agarra una cadena que está conectada al candelabro y se balancea.
hacia el dragón. Falla y vuelve a golpear. Mira
Se levanta y ve que el candelabro está justo encima de la cabeza del dragón.
Él tira de la cadena y se suelta y él cae y choca
Burro fuera del camino justo cuando el dragón está a punto de besarlo.
En cambio, el dragón besa el trasero de Shreks. Ella abre los ojos y
rugidos. Shrek suelta la cadena y el candelabro cae sobre
su cabeza, pero es demasiado grande y pasa por encima de su cabeza y forma
una especie de collar para ella. Ella ruge de nuevo y Shrek y Burro
salir corriendo. Estilo muy 'Matrix'. Shrek agarra al burro y
Luego agarra a la princesa Fiona mientras pasa corriendo junto a ella.

BURRO
¡Hola princesa!

FIONA
¡Habla!

SHREK
Sí, eso es lograr que se calle.
el truco.

Todos comienzan a gritar cuando el dragón se acerca a ellos. manchas de shrek
un tobogán descendente y salta. Pero lamentablemente hay una
Se rompe la piedra y golpea a Shrek justo en la ingle. Su
Los ojos se cruzan y cuando llega al final del tobogán tropieza.
Se aleja y camina con ligereza.

SHREK
¡Oh!

Shrek los acerca a la salida y deja a Donkey y Fiona.


SHREK
¡Bien, ustedes dos, escucharon la salida! Enfermo
Cuida del dragón.

Shrek agarra una espada y regresa hacia el interior del
castillo. Lanza la espada entre varios movimientos superpuestos.
eslabones de la cadena. Los eslabones de la cadena están unidos a la lámpara de araña que
Todavía está alrededor del cuello del dragón.

SHREK
(haciendo eco) ¡Corre!

Todos salen corriendo hacia la salida con el dragón en llamas.
buscar. Llegan al puente y cruzan. Los dragones
Escupe fuego y el puente comienza a arder. Todos ellos aguantan
por su vida cuando las cuerdas que sostienen el puente colapsan. Ellos
se giran hacia el otro lado. Mientras cuelgan boca abajo parecen
con horror cuando el dragón hace volar sobre la lava hirviendo para
conseguirlos. Pero de repente la lámpara con la cadena tira del
dragón regresa y ella no puede llegar a ellos. Nuestra pandilla sube
rápidamente a un lugar seguro mientras el dragón parece enojado y luego da un
gemido triste mientras ve a Donkey alejarse.

FIONA
(deslizándose por la colina del 'volcán') Tú
¡lo hizo! ¡Tú me rescataste! Eres increíble.
(Detrás de ella el burro cae colina abajo)
Eres... Eres maravillosa. Estás...
(Se da vuelta y ve a Shrek caer por el
colina y chocar con Donkey) un poco
poco ortodoxo, lo admito. Pero tu acto
es grande, y tu corazón es puro. Soy
eternamente en deuda contigo. (El burro limpia
su garganta.) ¿Y dónde estaría un valiente?
¿Se quedará el caballero sin su noble corcel?


BURRO
Espero que hayas escuchado eso. Ella me llamó
un noble corcel. Ella piensa que soy un corcel.


FIONA
La batalla está ganada. Puedes quitar tu
casco, buen señor caballero.

SHREK
UH no.

FIONA
¿Por qué no?

SHREK
Tengo pelo de casco.

FIONA
Por favor. Yo miraría la cara
de mi salvador.

SHREK
No, no, no lo harías... - 'st.

FIONA
¿Pero cómo me besarás?

SHREK
¿Qué? (a Burro) Eso no estaba en el
descripción del trabajo.

BURRO
Quizás sea una ventaja.

FIONA
No, es el destino. Oh, debes saber
cómo va. Una princesa encerrada en un
Torre y acosada por un dragón es rescatada.
por un valiente caballero, y luego comparten
El primer beso del verdadero amor.

BURRO
¿Mmm? ¿Con Shrek? Piensas... Espera.
Esperar. ¿Crees que Shrek eres verdad?
¿amar?

FIONA
Bueno, sí.

Tanto Donkey como Shrek se echaron a reír.

BURRO
¡Crees que Shrek es tu verdadero amor!


FIONA
¿Qué tiene de divertido?

SHREK
Digamos que no soy tu tipo, ¿vale? Fiona:
Por supuesto que lo eres. Eres mi salvador.
Ahora... Ahora quítate el casco.

SHREK
Mirar. Realmente no creo que esto sea un
buena idea.

FIONA
Simplemente quítate el casco.

SHREK
No voy a.

FIONA
Tómalo.

SHREK
¡No!

FIONA
¡Ahora!

SHREK
¡Bueno! Fácil. Como usted ordene. Su Alteza.
(se quita el casco)

FIONA
Tú... eres un... un ogro.

SHREK
Oh, esperabas al Príncipe Azul.


FIONA
Bueno, sí, en realidad. Oh, no. Esto es
todo mal. Se supone que no deberías serlo
un ogro.

SHREK
Princesa, fui enviada a rescatarte por
Señor Farquaad, ¿de acuerdo? Él es quien
quiere casarse contigo.

FIONA
¿Entonces por qué no vino a rescatarme?


SHREK
Buena pregunta. Deberías preguntarle eso
cuando lleguemos.

FIONA
Pero tengo que ser rescatado por mi verdadero
amor, no por algún ogro y su... su
mascota.

BURRO
Bueno, hasta aquí el noble corcel.

SHREK
No estás haciendo mi trabajo más fácil.


FIONA
Lo siento, pero tu trabajo no es mi problema.
Puedes decirle a Lord Farquaad que si él
quiere rescatarme adecuadamente, estaré
esperándolo aquí mismo.

SHREK
¡Ey! No soy el mensajero de nadie, todos
¿bien? (siniestro) Soy un repartidor.
(Él rápidamente la levanta y la balancea
ella sobre su hombro como si fuera una
saco de patatas)

FIONA
No te atreverías. ¡Bájame!

SHREK
¿Vienes, burro?

BURRO
Estoy justo detrás de ti.

FIONA
Bájame o sufrirás el
¡consecuencias! ¡Esto no es digno!
¡Bájame!

BOSQUE

Ha pasado un poco de tiempo y Fiona se ha calmado. Ella solo
cuelga allí sin fuerzas mientras Shrek la carga.

BURRO
Bien, aquí hay otra pregunta. Decir
Hay una mujer que te gusta, ¿verdad?
pero realmente no te gusta de esa manera.
¿Cómo la decepcionas tan fácilmente?
sus sentimientos no están heridos, pero tú no
¿Quemarse hasta quedar crujiente y comerse?

FIONA
Sólo dile que ella no es tu verdadera
amar. Todo el mundo sabe lo que pasa cuando
encuentras tu... (Shrek la deja caer
el suelo) ¡Oye! Cuanto antes lleguemos a
DuLoc, mejor.

BURRO
Te encantará estar allí, princesa.
¡Es hermoso!

FIONA
¿Y mi futuro novio? ¿Lord Farquaad?
¿Cómo es él?

SHREK
Déjame decirlo de esta manera, princesa. Hombres
de la talla de Farquaad son escasos.
(Él y Donkey se ríen)

Shrek luego procede a salpicarse agua en la cara para lavarse.
el polvo y la mugre.

BURRO
No sé. Hay quienes piensan
poco de él. (se ríen de nuevo) Fiona:
Para. Basta ya, los dos. Estás
Solo celoso, nunca podrás estar a la altura.
a un gran gobernante como Lord Farquaad.


SHREK
Sí, bueno, tal vez tengas razón, princesa.
Pero te dejaré hacer la "medición".
cuando lo veas mañana.

FIONA
(mira la puesta de sol) ¿Mañana?
¿Tardará tanto? ¿No deberíamos parar?
hacer campamento?

SHREK
No, eso llevará más tiempo. podemos mantener
yendo.

FIONA
Pero hay ladrones en el bosque.

BURRO
¡Vaya! ¡Se acabó el tiempo, Shrek! el campamento esta comenzando
para sonar bien.

SHREK
Hey vamos. soy más aterrador que cualquier otra cosa
vamos a ver en este bosque.


FIONA
¡Necesito encontrar un lugar para acampar ahora!


Las orejas de Donkey y Shrek bajan mientras se alejan de ella.


ACANTILADO DE MONTAÑA

Shrek ha encontrado una cueva que parece estar en buen estado. el empuja
una roca de piedra fuera del camino para revelar la cueva.

SHREK
¡Ey! Aqui.

BURRO
Shrek, podemos hacerlo mejor que eso. I
No creas que esto es digno de una princesa.


FIONA
No, no, es perfecto. solo necesita
algunos toques hogareños.

SHREK
¿Toques hogareños? ¿Cómo qué? (el escucha
Un ruido desgarrador y mira a Fiona.
que ha arrancado la corteza de un árbol.)


FIONA
¿Una puerta? Bueno, caballeros, les invito
buenas noches. (entra en la cueva y
pone la puerta de corteza detrás de ella)


BURRO
¿Quieres que te lea un cuento antes de dormir?
Lo haré.

FIONA
(os) ¡Dije buenas noches!

Shrek mira a Burro por un segundo y luego va a mover el
roca frente a la entrada de la cueva con Fiona.
todavía dentro.

BURRO
Shrek¿Qué estás haciendo?

SHREK
(risas) Yo sólo- - Ya sabes - - Oh,
vamos. Estaba bromeando.

MÁS TARDE AQUELLA NOCHE

Shrek y Burro están sentados alrededor de una fogata. ellos estan mirando
hacia el cielo mientras Shrek señala ciertas constelaciones de estrellas
al burro.

SHREK
Y ese es Throwback.
el único ogro que alguna vez escupió más de tres
Campos de trigo.

BURRO
Bien. Sí. Oye, ¿puedes decirme mi futuro?
de estas estrellas?

SHREK
Las estrellas no dicen el futuro, Burro.
Cuentan historias. Mira, ahí está Bloodnut.
el Flatulento. Puedes adivinar lo que es
famoso por.

BURRO
Sé que estás inventando esto.

SHREK
No mires. Ahí está él, y ahí está el
grupo de cazadores huyendo de su
hedor.

BURRO
Eso no es nada más que un montón de pequeñas
puntos.

SHREK
Sabes, Burro, a veces las cosas son
más de lo que parecen. ¿Mmm? Olvídalo.


BURRO
(da un gran suspiro) Oye, Shrek, ¿qué?
¿Qué vamos a hacer cuando tengamos nuestro pantano de todos modos?


SHREK
¿Nuestro pantano?

BURRO
Ya sabes, cuando terminemos de rescatar
la princesa.

SHREK
¿Nosotros? Burro, no existe el "nosotros". hay
nada de "nuestro". Solo estamos yo y mi pantano.
Lo primero que voy a hacer es construir.
un muro de diez pies alrededor de mi terreno.

BURRO
Me cortaste profundamente, Shrek. Me cortaste de verdad
profundo justo ahora. ¿Sabes lo que pienso?
Creo que todo este asunto del muro es simplemente
una forma de mantener a alguien fuera.

SHREK
No, ¿tú crees?

BURRO
¿Estás ocultando algo?

SHREK
No importa, burro.

BURRO
Oh, esta es otra de esas cebollas.
cosas, ¿no?

SHREK
No, este es uno de esos que se dejan caer y
Déjalo en paz.

BURRO
¿Por qué no quieres hablar de eso?


SHREK
¿Por qué quieres hablar de eso?

BURRO
¿Por qué estás bloqueando?

SHREK
No estoy bloqueando.

BURRO
Oh, sí, lo eres.

SHREK
Burro, te lo advierto.

BURRO
¿A quién intentas mantener fuera?

SHREK
¡Todos! ¿Bueno?

BURRO
(pausa) Oh, ahora estamos llegando a alguna parte.
(sonríe)

En este punto Fiona aleja la "puerta" de la entrada a
la cueva y se asoma. Ninguno de los chicos la ve.

SHREK
¡Oh! ¡Por el amor de Pete! (se levanta y
camina hacia el borde del acantilado
y se sienta)

BURRO
¿Cuál es tu problema? ¿Qué tienes en contra?
¿El mundo entero de todos modos?

SHREK
Mira, no soy yo el que tiene el problema.
¿bueno? Es el mundo que parece tener
un problema conmigo. La gente echa un vistazo
hacia mí y vete. "¡Aah! ¡Ayuda! ¡Corre! Un gran,
¡Ogro estúpido y feo!" Me juzgan antes
Incluso me conocen. Por eso estoy mejor
solo.

BURRO
¿Sabes que? Cuando nos conocimos, no
Creo que eras sólo un grande, estúpido y feo.
ogro.

SHREK
Si lo se.

BURRO
Entonces, ¿hay burros ahí arriba?


SHREK
Bueno, ahí está Gabby, la Pequeña.
y Molesto.

BURRO
Vale, vale, ya lo veo. el gran brillante
uno, ahí mismo. ¿Ese de ahí?


Fiona vuelve a cerrar la puerta.

SHREK
Esa es la luna.

BURRO
Ah, okey.

DuLoc - El dormitorio de Farquaad

La cámara recorre muchas cosas de la boda. Suena música suave
en el fondo. Farquaad está en la cama, observando cómo el Magic
Mirror le muestra a la princesa Fiona.

FARQUAAD
De nuevo, muéstramelo de nuevo. Espejo Espejo,
muéstramela. Muéstrame la princesa.


ESPEJO
Hmph.

El Mirror retrocede y comienza a reproducirse nuevamente desde el principio.


FARQUAAD
Ah. Perfecto.

Farquaad mira su pecho desnudo y levanta la sábana.
cubrirse como si Fiona pudiera verlo mientras él mira tímidamente
a su imagen en el espejo.

MAÑANA

Fiona sale de la cueva. Ella mira a Shrek y Burro.
que todavía están durmiendo. Ella se adentra en el bosque y viene.
a través de un pájaro azul. Ella comienza a cantar. El pájaro canta
con ella. Ella toca notas cada vez más altas y el pájaro lucha
para seguirle el ritmo. De repente la presión de la nota es demasiado
grande y el pájaro explota. Fiona parece un poco avergonzada, pero
ella mira los huevos que dejó el pájaro. Lapso de tiempo, Fiona
Ahora está cocinando los huevos para el desayuno. Shrek y Burro todavía están
durmiendo. Shrek se despierta y mira a Fiona. el burro está hablando
en su sueño.

BURRO
(en voz baja) Mmm, sí, sabes que me gusta
es así. Vamos nena. Yo dije
Me gusta.

SHREK
Burro, despierta. (lo sacude)

BURRO
¿Eh? ¿Qué?

SHREK
Despertar.

BURRO
¿Qué? (se estira y bosteza)

FIONA
Buen día. Hm, ¿cómo te gusta tu
¿huevos?

BURRO
¡Buenos días, princesa!

Fiona se levanta y deja los huevos frente a ellos.

SHREK
¿A qué se debe todo esto?

FIONA
Ya sabes, tuvimos un mal momento.
empezar ayer. queria hacerlo
tú decides. Quiero decir, después de todo, lo hiciste
rescatarme.

SHREK
Gracias.

Burro huele los huevos y se lame los labios.

FIONA
Bueno, come. Tenemos un gran día por delante
de nosotros. (se va)

MÁS TARDE

Una vez más están en camino. Están caminando por el
bosque. Shrek eructa.

BURRO
¡Shrek!

SHREK
¿Qué? Es un cumplido. mejor fuera
que en, siempre digo. (risas)

BURRO
Bueno, no es forma de comportarse delante.
de una princesa.

Fiona eructa

FIONA
Gracias.

BURRO
Ella es tan desagradable como tú.

SHREK
(risas) Sabes, no eres exactamente
lo que esperaba.

FIONA
Bueno, tal vez no deberías juzgar a la gente.
antes de conocerlos.

Ella sonríe y luego continúa caminando, cantando suavemente. De repente
De la nada, un hombre desciende y lanza a Fiona hacia
un árbol.

ROBIN HOOD
¡La libertad! ¡Ey!

SHREK
¡Princesa!

FIONA
(a Robin Hood) ¿Qué estás haciendo?


ROBIN HOOD
¡Quédate quieto, mon cherie, porque yo soy tu salvador!
Y yo te estoy rescatando de este verde...(besos
su brazo mientras Fiona retrocede
asco)...bestia.

SHREK
¡Ey! ¡Esa es mi princesa! ir a buscarte
¡propio!

ROBIN HOOD
¡Por favor, monstruo! ¿No puedes ver que soy un
poco ocupado aquí?

FIONA
(cansándose) Mira, amigo, yo no
¡Sepa quién crees que eres!

ROBIN HOOD
¡Oh! ¡Por supuesto! Ay, qué grosero. Por favor
Permítame presentarme. Oh, hombres felices.
(risas)

De repente empieza a sonar un acordeón y salen los hombres alegres.
de los arbustos. Comienzan a cantar el tema principal de Robin.

HOMBRE ALEGRE
Ta, da, da, da, whoo.

ROBIN HOOD
Robo a los ricos y doy a los
necesitado.

HOMBRE ALEGRE
Él toma un pequeño porcentaje,

ROBIN HOOD
Pero no soy codicioso. yo rescato bonita
Damiselas, hombre, estoy bien.

HOMBRE ALEGRE
Qué tipo, señor Hood.

ROBIN HOOD
Descomponerlo. Me gusta una pelea honesta
y una sirvienta descarada...

HOMBRE ALEGRE
Lo que básicamente está diciendo es que le gusta
Llegar...

ROBIN HOOD
Pagado. Entonces...Cuando un ogro en el monte
Agarra a una dama por el trasero. Eso es malo.


HOMBRE ALEGRE
Eso es malo.

ROBIN HOOD
Cuando una belleza está con una bestia, eso hace
Estoy terriblemente enojado.

HOMBRE ALEGRE
Está enojado, está muy, muy enojado.


ROBIN HOOD
Tomaré mi espada y la atravesaré
vuestro corazón, mantened vuestros ojos en mí, muchachos
porque estoy a punto de empezar...

Se oye un gruñido cuando Fiona se baja de la rama del árbol y
Deja inconsciente a Robin Hood.

FIONA
¡Hombre, eso fue molesto!

Shrek la mira con admiración.

HOMBRE FELIZ
Oh, pequeño- - (dispara una flecha a
Fiona pero ella se aparta del camino)


La flecha vuela hacia Burro que salta a los brazos de Shrek para
Apartese del camino. La flecha procede a rebotar en un árbol.


Comienza otra secuencia de pelea y Fiona da un grito de kárate y
Luego procede a darle una paliza a los Merry Men. Hay
Un momento muy interesante de 'Matrix' aquí cuando Fiona hace una pausa
en el aire para arreglarse el cabello. Finalmente todos los Merry Men están caídos.
y Fiona comienza a alejarse.

FIONA
¿Vamos?

SHREK
Sostenga el teléfono. (deja caer al burro y comienza
caminando detrás de Fiona) ¡Oh! Whoa Whoa,
Vaya. Espera ahora. ¿De dónde vino eso?
¿de?

FIONA
¿Qué?

SHREK
¡Eso! Allá atrás. ¡Eso fue increíble!
¿Dónde aprendiste eso?

FIONA
Bueno...(risas) cuando uno vive solo,
uh, uno tiene que aprender estas cosas en
caso hay un... (jadeos y puntos)
¡Hay una flecha en tu trasero!

SHREK
¿Qué? (se gira y mira) Oh, ¿podrías
¿mira eso? (va a sacarlo
pero se estremece porque está tierno)


FIONA
Oh, no. Todo esto es mi culpa. Estoy tan
Lo siento.

BURRO
(acercándose) ¿Por qué? ¿Qué ocurre?

FIONA
Shrek está herido.

BURRO
Shrek está herido. ¿Shrek está herido? Oh, no,
Shrek va a morir.

SHREK
Burro, estoy bien.

BURRO
No puedes hacerme esto, Shrek. Soy
demasiado joven para que mueras. Mantén tus piernas
elevado. Gira la cabeza y tose.
¿Alguien conoce el Heimlich?

FIONA
¡Burro! Cálmate. Si quieres ayudar
Shrek, corre al bosque y encuéntrame.
una flor azul con espinas rojas.

BURRO
Flor azul, espinas rojas. Está bien, estoy en
él. Flor azul, espinas rojas. no mueras
Shrek. Si ves un túnel largo, quédate
lejos de la luz!

SHREK Y FIONA
¡Burro!

BURRO
Oh sí. Bien. Flor azul, espinas rojas.
(escapar)

SHREK
¿Para qué sirven las flores?

FIONA
(como si fuera obvio) Para deshacerse
de Burro.

SHREK
Ah.

FIONA
Ahora quédate quieto y tiraré de esto.
cosa fuera. (le da un poco a la flecha
jalar)

SHREK
(se aleja de un salto) ¡Ay! ¡Ey! fácil con el
tirando.

Mientras continúan hablando, Fiona sigue persiguiendo la flecha y
Shrek sigue esquivando sus manos.

FIONA
Lo siento, pero tiene que salir.


SHREK
No, es tierno.

FIONA
Ahora, espera.

SHREK
Lo que estás haciendo es lo opuesto a
ayuda.

FIONA
No te muevas.

SHREK
Mira, tiempo muerto.

FIONA
¿Podrías...? (gruñe mientras Shrek pone su
Pasale la cara para detenerla.
llegar a la flecha) Está bien. Qué hacer
¿Propones que lo hagamos?

EN OTRA PARTE

Burro sigue buscando la flor especial.

BURRO
Flor azul, espinas rojas. Flor azul,
espinas rojas. Flor azul, espinas rojas.
Esto sería mucho más fácil si no lo fuera.
daltónico! Flor azul, espinas rojas.


SHREK
(os) ¡Ay!

BURRO
¡Espera, Shrek! Estoy yendo'! (rasga un
Flor de un arbusto cercano que simplemente sucede
ser una flor azul con espinas rojas)


EL CAMINO DEL BOSQUE

SHREK
¡Ay! No es bueno.

FIONA
Bueno. Bueno. Casi puedo ver la cabeza.
(Shrek gruñe mientras tira) Es solo que
acerca de...

SHREK
¡Ay! ¡Oh! (se sacude y logra caer
terminado con Fiona encima de él)

BURRO
Ejem.

SHREK
(tirando a Fiona lejos de él) Nada
sucedió. Sólo estábamos, eh...

BURRO
Mira, si quisieras estar solo, todo
lo que tenías que hacer era preguntar. ¿Bueno?

SHREK
¡Oh vamos! Eso es lo último que hay
mi mente. La princesa aquí era solo-
- (Fiona saca la flecha) ¡Uf! (él
Se vuelve para mirar a Fiona, quien sostiene
la flecha con una sonrisa) ¡Ay!

BURRO
¿Ey qué es eso? (risita nerviosa)
Eso...¿eso es sangre?

El burro se desmaya. Shrek se acerca y lo levanta mientras continúan.
en su camino.

Hay un montaje de escenas mientras el grupo regresa a DuLoc.
Shrek trepa hasta lo alto de un árbol para hacerlo caer sobre un
pequeño arroyo para que Fiona no se moje. Shrek luego se levanta como
El burro está a punto de cruzar el árbol y el árbol se balancea hacia atrás.
en su posición vertical y Donkey sale volando. Shrek aplastando
y un montón de moscas y mosquitos. Fiona agarra una telaraña cercana
que está en la rama de un árbol y corre por el campo balanceándolo
alrededor para atrapar los insectos. Luego se lo entrega a Shrek, quien comienza
comer como si fuera un placer. Mientras él se aleja, ella se lame los dedos.
Shrek atrapa un sapo, lo infla como un globo y lo presenta.
a Fiona. Fiona atrapando una serpiente, haciéndola volar, modelándola.
convertirlo en un animal globo y presentárselo a Shrek. El grupo
llegando a un molino de viento que está cerca de DuLoc.

MOLINO

SHREK
Ahí está, princesa. Tu futuro espera
tú.

FIONA
¿Ese es DuLoc?

BURRO
Si lo se. Ya sabes, piensa Shrek.
Lord Farquaad está compensando algo.
lo que creo que significa que realmente...(Shrek
pasos en su casco) ¡Ay!

SHREK
Um, yo, uh... Supongo que será mejor que nos movamos.
en.

FIONA
Seguro. ¿Pero Shrek? Estoy... estoy preocupado.
sobre burro.

SHREK
¿Qué?

FIONA
Es decir, míralo. el no parece
tan bueno.

BURRO
¿De qué estás hablando? Estoy bien.


FIONA
(se arrodilla para mirarlo a los ojos) Eso es
lo que siempre dicen, y luego lo siguiente
Lo que sabes es que estás boca arriba.
(pausa) Muerto.

SHREK
Sabes, ella tiene razón. Te ves terrible.
¿Quieres sentarte?

FIONA
Ya sabes, te prepararé un poco de té.


BURRO
No quería decir nada, pero
Sentí una punzada en el cuello, y cuando
Giro la cabeza así, mira, (gira
su cuello de manera muy aguda hasta que su
la cabeza está completamente de lado) ¡Ay! ¿Ver?


SHREK
quien esta hambriento? Encontraré algo para cenar.


FIONA
Voy a buscar leña.

BURRO
Oye, ¿adónde vas? Oh, hombre, no puedo
siente mis dedos de los pies! (mira hacia abajo y grita)
¡No tengo dedos en los pies! creo que necesito
un abrazo.

ATARDECER

Shrek ha encendido un fuego y está cocinando el resto de la cena mientras
Fiona come.

FIONA
Mmm. Esto es bueno. Esto es realmente bueno.
¿Qué es esto?

SHREK
Uh, rata de hierba. Estilo asador.

FIONA
En serio. Bueno, esto es delicioso.


SHREK
Pues también quedan buenísimos en guisos. Ahora,
No quiero presumir, pero hago algo malo.
guiso de rata de marihuana. (risas)

Fiona mira a DuLoc y suspira.

FIONA
Supongo que cenaré un poco diferente.
mañana por la noche.

SHREK
Tal vez puedas venir a visitarme al pantano.
a veces. Cocinaré todo tipo de cosas.
para ti. Sopa de sapo de los pantanos, tartar de ojo de pescado
- - Tu dilo.

FIONA
(sonríe) Me gustaría eso.

Se sonríen el uno al otro.

SHREK
¿Princesa?

FIONA
¿Sí, Shrek?

SHREK
Yo, um, me preguntaba... ¿estás... (suspiros)
¿Vas a comer eso?

BURRO
(risas) Hombre, ¿no es esto romántico?
Solo mira esa puesta de sol.

FIONA
(salta) ¿Atardecer? ¡Oh, no! Quiero decir, es
tarde. E-Es muy tarde.

SHREK
¿Qué?

BURRO
Espera un minuto. Veo lo que está pasando
aquí. Tienes miedo de la oscuridad, ¿no?
¿tú?

FIONA
¡Sí! Si eso es. Estoy aterrorizado.
Sabes, será mejor que entre.

BURRO
No te sientas mal, princesa. Yo solía
Ten miedo a la oscuridad también, hasta que...
- Oye, no, espera. todavía tengo miedo de
la oscuridad.

shrek suspira

FIONA
Buenas noches.

SHREK
Buenas noches.

Fiona entra al molino de viento y cierra la puerta. miradas de burro
a Shrek con una nueva mirada.

BURRO
¡Oh! Ahora realmente veo lo que está pasando
aquí.

SHREK
¿De qué estás hablando?

BURRO
Ni siquiera quiero oírlo. Mira, estoy
un animal y tengo instintos. Y
Sé que ustedes dos estaban investigando cada uno
otro. Podía sentirlo.

SHREK
Estás loco. solo la estoy trayendo
De vuelta a Farquaad.

BURRO
Vamos, Shrek. Despierta y huele
las feromonas. Sólo entra y cuéntale
ella como te sientes.

SHREK
Yo- - No hay nada que contar. Además,
incluso si le dijera eso, bueno, tú
Lo sé - - y no digo que lo sepa porque
Yo no... ella es una princesa y yo soy
- -

BURRO
¿Un ogro?

SHREK
Sí. Un ogro.

BURRO
Oye, ¿adónde vas?

SHREK
Para conseguir... mover leña. (suspiros)

Burro mira la gran pila de leña que ya hay allí.
es.

LAPSO DE TIEMPO

Donkey abre la puerta del molino y entra. Fiona está
no se ve por ninguna parte.

BURRO
¿Princesa? ¿La princesa Fiona? Princesa,
¿dónde estás? ¿Princesa?

Fiona mira a Donkey desde las sombras, pero no podemos verla.


BURRO
Es muy espeluznante aquí. no estoy jugando
no juegos.

De repente Fiona cae de la barandilla. ella se levanta solo que no lo hace
parecerse a ella misma. Parece un ogro y Donkey empieza a enloquecer.
afuera.

BURRO
¡Ah!

FIONA
¡Oh, no!

BURRO
¡No ayuda!

FIONA
¡Shh!

BURRO
¡Shrek! ¡Shrek! ¡Shrek!

FIONA
No, está bien. Está bien.

BURRO
¿Qué hiciste con la princesa?


FIONA
Burro, soy la princesa.

BURRO
¡Ah!

FIONA
Soy yo, en este cuerpo.

BURRO
¡Ay dios mío! Te comiste a la princesa. (a
su estómago) ¿Puedes oírme?

FIONA
¡Burro!

BURRO
(todavía apuntando a su estómago) Escucha,
¡sigue respirando! te sacaré de
¡allá!

FIONA
¡No!

BURRO
¡Shrek! ¡Shrek! ¡Shrek!

FIONA
Shh.

BURRO
¡Shrek!

FIONA
Este soy yo.

Burro la mira a los ojos mientras ella le acaricia el hocico y él se calma.
abajo.

BURRO
¿Princesa? ¿Lo que le pasó? Estás,
uh, uh, uh, diferente.

FIONA
Soy feo, ¿vale?

BURRO
¡Bueno sí! ¿Fue algo que comiste?
Porque le dije a Shrek que esas ratas eran un
mala idea. Eres lo que comes, dije.
Ahora - -

FIONA
No. Yo... he estado así tanto tiempo.
como puedo recordar.

BURRO
¿Qué quieres decir? Mira, yo nunca lo he sido
Te había visto así antes.

FIONA
Sólo ocurre cuando se pone el sol.
"De noche de una manera, de día de otra. Esto
será la norma... hasta que encuentres
El primer beso del verdadero amor... y luego tomar.
la verdadera forma del amor."

BURRO
Ah, eso es hermoso. no lo sabia
escribiste poesía.

FIONA
Es un hechizo. (suspiro) Cuando era un poco
Niña, una bruja me hechizó. Cada
noche me convierto en esto. Esta horrible,
bestia fea! Me colocaron en una torre
para esperar el día en que mi verdadero amor lo haría
rescatarme. Por eso tengo que casarme
Lord Farquaad mañana antes del sol
se pone y me ve así. (comienza
llorar)

BURRO
Bien, bien. Cálmate. Mirar,
No está tan mal. No eres tan feo.
Bueno, no voy a mentir. Tú eres feo.
Pero sólo te ves así de noche.
Shrek es feo 24 horas al día, 7 días a la semana.

FIONA
Pero Burro, soy una princesa, y esto
No es así como debe verse una princesa.


BURRO
Princesa, ¿qué tal si no te casas?
¿Farquaad?

FIONA
Tengo que. Sólo el beso de mi verdadero amor
puede romper el hechizo.

BURRO
Pero, ya sabes, eres una especie de
orge y Shrek... bueno, tienes un
mucho en común.

FIONA
¿Shrek?

AFUERA

Shrek camina hacia el molino de viento con un girasol en su
mano.

SHREK
(a sí mismo) Princesa, yo... - Uh, ¿cómo está?
¿Va, primero que nada? ¿Bien? Bueno, bueno
para mí también. Estoy bien. vi esta flor
y pensé en ti porque es bonita
y - - bueno, realmente no me gusta,
pero pensé que te gustaría porque
eres bonita. Pero me gustas de todos modos.
Yo... - uh, uh... (suspiros) Estoy en problemas.
Bien, allá vamos.

Camina hacia la puerta y se detiene afuera cuando escucha a Donkey.
y Fiona hablando.

FIONA
(os) No puedo simplemente casarme con quien quiera.
Mírame bien, Burro. Quiero decir,
Realmente, ¿quién puede amar tanto a una bestia?
¿horrible y feo? "Princesa" y "fea"
no vayan juntos. Por eso no puedo
Quédate aquí con Shrek.

Shrek retrocede en estado de shock.

FIONA
(os) Mi única oportunidad de vivir felizmente
para siempre es casarme con mi verdadero amor.


Shrek lanza un profundo suspiro. Tira la flor y camina.
lejos.

ADENTRO

FIONA
¿No lo ves, burro? Así es como
tiene que ser. Es la única manera de romper
el hechizo.

BURRO
Al menos tienes que decirle a Shrek la verdad.


FIONA
¡No! No puedes respirar una palabra. Nadie
alguna vez debes saberlo.

BURRO
¿Cuál es el punto de poder hablar?
si tienes que guardar secretos?

FIONA
Prométeme que no lo dirás. ¡Promesa!

BURRO
Bien, bien. No se lo diré.
Pero deberías. (sale afuera) Yo solo
Sé que antes de que esto termine, voy a
Necesita mucha terapia seria.
Mira mis ojos temblando.

Fiona sale por la puerta y lo ve alejarse. Ella mira
Se agacha y ve el girasol. Ella lo recoge antes de regresar.
dentro del molino de viento.

MAÑANA

El burro está dormido. Shrek no aparece por ningún lado. Fiona todavía está
despierto. Ella está arrancando pétalos del girasol.

FIONA
Le digo, le digo que no. Yo le digo,
Le digo que no. Yo le digo. (ella rápidamente
corre hacia la puerta y sale) ¡Shrek!
Shrek, hay algo que quiero...(ella
mira y ve el sol naciente, y como
el sol llega a la cima del cielo ella se vuelve
en un humano.)

Justo cuando mira hacia el sol, ve a Shrek pisando fuerte hacia
su.

FIONA
Shrek. ¿Estás bien?

SHREK
¡Perfecto! Nunca he estado mejor.

FIONA
Yo - - Yo no - - Hay algo
Tengo que decirte.

SHREK
No tienes que decirme nada,
Princesa. Anoche escuché suficiente.


FIONA
¿Oíste lo que dije?

SHREK
Cada palabra.

FIONA
Pensé que lo entenderías.

SHREK
Ah, lo entiendo. Como dijiste: "¿Quién
¿Podrías amar a una bestia horrible y fea?


FIONA
Pero pensé que eso no importaría.
tú.

SHREK
¿Sí? Bueno, lo hace. (Fiona mira
él en shock. Él mira más allá de ella y
ve un grupo acercándose.) Ah, claro.
a tiempo. Princesa, te he traído
un poco algo.

Farquaad ha llegado con un grupo de sus hombres. Se ve muy regio
sentado sobre su caballo. Nunca adivinarías que él es sólo
como 3 pies de alto. El burro se despierta bostezando mientras los soldados
marchar por.

BURRO
¿Qué me perdí? ¿Qué me perdí? (lugares
los soldados) (apagado) ¿Quién dijo eso?
No pudo haber sido el burro.

FARQUAAD
Princesa Fiona.

SHREK
Como fue prometido. Ahora entrégalo.

FARQUAAD
Muy bien, ogro. (sostiene un pedazo
de papel) La escritura de su pantano, limpiada
fuera, según lo acordado. Tómalo y vete antes.
Cambio de opinión. (Shrek toma el papel)
Perdóname, princesa, por asustarme.
tú, pero me asustaste, porque tengo
Nunca antes había visto una belleza tan radiante.
Soy Lord Farquaad.

FIONA
¿Lord Farquaad? Oh no no. (Farquaad
chasquea los dedos) Perdóname, mi señor,
porque solo estaba diciendo un breve... (Mira
mientras Farquaad es bajado de su caballo
y se sentó frente a ella. Él viene
hasta la cintura.) adiós.

FARQUAAD
Oh eso es tan dulce. no tienes
desperdiciar buenos modales con el ogro. Es
No es que tenga sentimientos.

FIONA
No, tienes razón. No es así.

Donkey observa este intercambio con una mirada curiosa en su rostro.


FARQUAAD
Princesa Fiona, hermosa, justa, impecable.
Fiona. Te pido tu mano en matrimonio.
¿Serás la novia perfecta para el
novio perfecto?

FIONA
Señor Farquaad, acepto. Nada lo haría
hacer - -

FARQUAAD
(interrumpiendo) ¡Excelente! yo empezare
los planes, para mañana nos casamos!

FIONA
¡No! Quiero decir, ¿por qué esperar? Vamos a llegar
Casado hoy antes de que se ponga el sol.


FARQUAAD
Oh, ansioso, ¿verdad? Tienes razón.
Cuanto antes mejor. hay mucho
¡hacer! Ahí está el catering, el pastel,
la banda, la lista de invitados. Capitán, redondo
¡Arriba algunos invitados! (un guardia pone a Fiona
a lomos de su caballo)

FIONA
Adiós, ogro.

Todo el grupo de Farquaad comienza a regresar a DuLoc. Relojes de burro
ellos van.

BURRO
Shrek, ¿qué estás haciendo? estas dejando
ella se aleje.

SHREK
¿Sí? ¿Así que lo que?

BURRO
Shrek, hay algo en ella.
no lo sé. Mira, hablé con ella la última vez.
noche, ella es - -

SHREK
Sé que hablaste con ella anoche.
Son grandes amigos, ¿no? Ahora si
ustedes dos son tan buenos amigos, ¿por qué no?
¿La sigues a casa?

BURRO
Shrek, yo... quiero ir contigo.

SHREK
Te lo dije, ¿no? No vendrás
a casa conmigo. ¡Vivo solo! ¡Mi pantano!
¡A mí! ¡Nadie más! ¿Entender? ¡Nadie!
Especialmente inútil, patético, molesto,
burros que hablan!

BURRO
Pero pensé - -

SHREK
Sí. ¿Sabes que? ¡Pensaste mal!
(se marcha pisando fuerte)

BURRO
Shrek.

Montaje de diferentes escenas. Shrek regresa a casa. Fiona
siendo ajustado para el vestido de novia. Burro en un arroyo corriendo
en el dragón. Shrek limpiando su casa. fiona cenando
solo. Shrek cenando solo.

LA CASA DE SHREK

Shrek está cenando cuando escucha un sonido afuera. El va
afuera para investigar.

SHREK
¿Burro? (Burro lo ignora y continúa
con lo que está haciendo.) ¿Qué estás
¿haciendo?

BURRO
Yo pensaría que, de todas las personas, tú
Reconoce una pared cuando la ves.


SHREK
Bueno sí. Pero se supone que el muro
rodear mi pantano, no atravesarlo.


BURRO
Es alrededor de tu mitad. Mira, ese es tu
la mitad, y esta es mi mitad.

SHREK
¡Oh! Tu mitad. Mmm.

BURRO
Sí, mi mitad. Ayudé a rescatar a la princesa.
Hice la mitad del trabajo. obtengo la mitad del
botín. Ahora dame esa gran piedra vieja,
el que se parece a tu cabeza.


SHREK
¡Apártate!

BURRO
No, retrocede.

SHREK
¡Este es mi pantano!

BURRO
Nuestro pantano.

SHREK
(agarra la rama del árbol. El burro está trabajando.
con) ¡Suéltate, Burro!

BURRO
Déjalo ir.

SHREK
¡Imbécil testarudo!

BURRO
Ogro maloliente.

SHREK
¡Bien! (deja caer la rama del árbol y camina
lejos)

BURRO
Oye, oye, vuelve aquí. no he terminado
contigo todavía.

SHREK
Bueno, ya terminé contigo.

BURRO
Uh-uh. Ya sabes, contigo es siempre,
"¡Yo yo yo!" ¡Bien adivina que! Ahora
¡es mi turno! Así que cállate y
¡prestar atención! Son malos conmigo. Tú
insultame y no aprecias nada
¡Eso hago! Siempre me estás empujando
alrededor o alejándome.

SHREK
¿Oh sí? Bueno, si te tratara así
mal, ¿cómo es que volviste?

BURRO
¡Porque eso es lo que hacen los amigos! Ellos
¡Perdonense el uno al otro!

SHREK
Oh sí. Tienes razón, burro. Yo perdono
tú... ¡por apuñalarme por la espalda!
(entra en el retrete y cierra de golpe el
puerta)

BURRO
¡Oh! Estás tan envuelto en capas,
chico cebolla, tienes miedo de los tuyos
sentimientos.

SHREK
(os) ¡Vete!

BURRO
Ahí estás, haciéndolo de nuevo.
como le hiciste a Fiona. Todo lo que ella alguna vez
era como tú, tal vez incluso amarte.


SHREK
(os) ¿Me amas? Ella dijo que yo era feo, un
criatura espantosa. Escuché a los dos de
tu hablas.

BURRO
Ella no estaba hablando de ti. Ella estaba
hablando de... alguien más.


SHREK
(abre la puerta y sale) Ella no estaba
¿Hablando de mi? Bueno, entonces ¿quién fue?
ella hablando?

BURRO
Uh-uh, de ninguna manera. No digo nada.
No quieres escucharme. ¿Bien?
¿Bien?

SHREK
¡Burro!

BURRO
¡No!

SHREK
Está bien, mira. Lo siento, ¿vale? (suspiro)
Lo lamento. Supongo que solo soy un grande,
Ogro estúpido y feo. ¿Puedes perdonarme?


BURRO
Oye, para eso están los amigos, ¿no?


SHREK
Bien. ¿Amigos?

BURRO
Amigos.

SHREK
Entonces, ¿qué dijo Fiona sobre mí?


BURRO
¿Qué me estás pidiendo? ¿Por qué no
¿Vas a preguntarle?

SHREK
¡La boda! Nunca lo lograremos
tiempo.

BURRO
¡Jajaja! No temas, porque donde hay
un testamento, el hay un camino y yo tengo un camino.
(silbatos)

De repente, el dragón llega por encima y vuela lo suficientemente bajo como para
pueden subir.

SHREK
¿Burro?

BURRO
Supongo que es sólo mi magnetismo animal.


Ambos ríen.

SHREK
Oh, ven aquí, tú. (le da al burro un
chuchería)

BURRO
Bien, bien. no consigas todo
baboso. A nadie le gusta un beso en el culo. Todo
Bien, súbete y agárrate fuerte. yo no he
Tuve la oportunidad de instalar los cinturones de seguridad.
todavía.

Suben a bordo del dragón y ella despega hacia DuLoc.

DULOC - IGLESIA

Fiona y Farquaad se van a casar. Todo el pueblo está ahí.
El encargado de la tarjeta apuntador sostiene una tarjeta que dice "Silencio venerado".


SACERDOTE
Gente de DuLoc, nos reunimos aquí hoy
para dar testimonio de la unión....

FIONA
(mirando el sol poniente) Um-

SACERDOTE
...de nuestro nuevo rey...

FIONA
Disculpe. ¿Podríamos simplemente saltar hacia adelante?
¿A los "sí quiero"?

FARQUAAD
(Se ríe y luego le hace un gesto al sacerdote.
para complacer a Fiona) Continúa.

PATIO

Algunos guardias están dando vueltas. De repente el dragón aterriza con
Una explosión. Todos los guardias salen corriendo.

BURRO
(a Dragón) Adelante, DIVIÉRTETE.
Si te necesitamos, silbaré. Qué tal si
¿eso? (ella asiente y va tras los guardias)
¡Shrek, espera, espera! ¡Espera un minuto! Tú
Quiero hacer esto bien, ¿no?

SHREK
(en la puerta de la Iglesia) ¿De qué estás hablando?
¿acerca de?

BURRO
Hay una cola que debes esperar. El
El predicador dirá: "Habla ahora o
Calla para siempre." Fue entonces cuando
usted dice: "¡Me opongo!"

SHREK
¡No tengo tiempo para esto!

BURRO
Hey, espera. ¿Qué estás haciendo? Escuchar
¡a mi! Mira, amas a esta mujer, ¿no?
¿tú?

SHREK
Sí.

BURRO
¿Quieres abrazarla?

SHREK
Sí.

BURRO
¿Por favor ella?

SHREK
¡Sí!

BURRO
(cantando al estilo James Brown) Entonces tú
Tengo que probar un poco de ternura.
(normal) A las chicas les encanta ese romántico.
¡tonterías!

SHREK
¡Está bien! Cortalo. ¿Cuándo hace esto?
¿El tipo dice la línea?

BURRO
Tenemos que comprobarlo.

DENTRO DE LA IGLESIA

Mientras el sacerdote habla, vemos la sombra de Burro a través de uno de los
Windows Shrek lo levanta para que pueda ver.

SACERDOTE
Y así, por el poder que me ha sido conferido...


Afuera

SHREK
¿Que ves?

BURRO
Todo el pueblo está ahí.

Adentro

SACERDOTE
Ahora os declaro marido y mujer...


Afuera

BURRO
Están en el altar.

Adentro

SACERDOTE
...Rey y reina.

Afuera

BURRO
¡Madre Fletcher! Ya lo dijo.


SHREK
¡Oh, por el amor de Pete!

Corre hacia adentro sin atrapar a Donkey, quien golpea el suelo con fuerza.


DENTRO DE LA IGLESIA

SHREK
(corriendo hacia el altar) ¡Me opongo!


FIONA
¿Shrek?

Toda la congregación se queda sin aliento al ver a Shrek.

FARQUAAD
Oh, ¿ahora qué quiere?

SHREK
(a la congregación cuando llega al frente
de la Iglesia) Hola a todos. teniendo
Un buen momento, ¿verdad? Me encanta DuLoc, primero
de todo. Muy limpio.

FIONA
¿Qué estás haciendo aquí?

SHREK
De verdad, ya es bastante grosero estar vivo.
cuando nadie te quiere, pero apareces
sin ser invitado a una boda...

SHREK
¡Fiona! Necesito hablar contigo.

FIONA
Oh, ¿ahora quieres hablar? Es un poco
Es tarde para eso, así que si me disculpan.
- -

SHREK
Pero no puedes casarte con él.

FIONA
¿Y por qué no?

SHREK
Porque... porque simplemente se está estropeando.
usted para que pueda ser rey.

FARQUAAD
¡Indignante! Fiona, no le escuches.


SHREK
Él no es tu verdadero amor.

FIONA
¿Y tú qué sabes sobre el amor verdadero?


SHREK
Bueno, yo - - Uh - - Quiero decir - -

FARQUAAD
Oh, esto es precioso. El conopial ha caído
enamorado de la princesa! Oh Dios
Caballero. (risas)

El encargado de la tarjeta apuntador sostiene una tarjeta que dice "Ríe". El
Toda la congregación se ríe.

FARQUAAD
¡Un ogro y una princesa!

FIONA
Shrek, ¿es esto cierto?

FARQUAAD
¿A quién le importa? ¡Es absurdo! Fiona,
mi amor, estamos a un beso de distancia
nuestro "felices para siempre". ¡Ahora Bésame!
(frunce los labios y se inclina hacia ella,
pero ella retrocede.)

FIONA
(mirando la puesta de sol) "Por la noche
de una manera, de día de otra." (a Shrek)
Quería mostrártelo antes.

Ella retrocede y cuando se pone el sol se transforma en su yo ogro.
Ella le da a Shrek una sonrisa tímida.

SHREK
Bueno, eso explica muchas cosas. (Fiona
sonrisas)

FARQUAAD
¡Puaj! ¡Es repugnante! ¡Guardias! ¡Guardias!
Te ordeno que quites eso de mi vista.
¡ahora! ¡Consíguelos! ¡Consíguelos a ambos!

Los guardias entran corriendo y separan a Fiona y Shrek. peleas shrek
a ellos.

SHREK
¡No no!

FIONA
¡Shrek!

FARQUAAD
Este hocus-pocus no altera nada. Este
El matrimonio es vinculante, y eso hace que
¡yo rey! ¿Ver? ¿Ver?

FIONA
¡No, suéltame! ¡Shrek!

SHREK
¡No!

FARQUAAD
No se queden ahí parados, imbéciles.


SHREK
¡Fuera de mi camino! ¡Fiona! ¡Argh!

FARQUAAD
Haré que te arrepientas del día que nos conocimos.
¡Te veré descuartizado y descuartizado! usted
¡Ruega por la muerte para salvarte!

FIONA
¡No, Shrek!

FARQUAAD
(sostiene una daga en la garganta de Fiona) Y
En cuanto a ti, mi esposa...

SHREK
¡Fiona!

FARQUAAD
Te haré encerrar en esa torre
¡Por el resto de tus días! ¡Soy rey!


Shrek logra liberar una mano y silba.

FARQUAAD
¡Tendré orden! ¡Tendré la perfección!
Tendré - - (El burro y el dragón
aparece y el dragón se inclina y
se come a Farquaad) ¡Aaaah! ¡Ah!

BURRO
Está bien. Nadie se mueva. tengo un dragón
aquí, y no tengo miedo de usarlo.
(El dragón ruge.) Soy un burro en
¡el borde!

El dragón eructa y la corona de Farquaad sale volando de su boca.
y cae al suelo.

BURRO
Matrimonios de famosos. Nunca duran,
¿ellos?

La congregación aplaude.

BURRO
Adelante, Shrek.

SHREK
¿Fiona?

FIONA
¿Sí, Shrek?

SHREK
Te amo.

FIONA
¿En realidad?

SHREK
En serio en serio.

FIONA
(sonríe) Yo también te amo.

Shrek y Fiona se besan. Thelonius toma una de las tarjetas y escribe
'Awwww' en la parte de atrás y luego se lo muestra a la congregación.


CONGREGACIÓN
¡Aawww!

De repente, la magia del hechizo aleja a Fiona. ella esta levantada
en el aire y ella flota allí mientras la magia actúa alrededor
su.

susurros
"Hasta que encuentres el primer beso del amor verdadero
y luego tomar la verdadera forma del amor. Llevar
la verdadera forma del amor. Toma la verdadera forma del amor."


De repente, los ojos de Fiona se abren de par en par. Ella está consumida por el hechizo
y luego se baja lentamente al suelo.

SHREK
(acercándose a ella) ¿Fiona? Fiona. Son
¿Estás bien?

FIONA
(levantándose, sigue siendo un ogro) Bueno,
Sí. Pero no lo entiendo. supongo
para ser bella.

SHREK
Pero ERES hermosa.

Se sonríen el uno al otro.

BURRO
(risas) Esperaba que esto fuera así.
un final feliz.

Shrek y Fiona se besan... y el beso se desvanece en...

EL PANTANO

...su beso de boda. Shrek y Fiona ahora están casados. 'Soy
a Believer' de Smashmouth se reproduce de fondo. shrek
y Fiona se separan y corren entre la multitud hacia donde los esperan.
carro. Que está hecho de una cebolla gigante. Fiona lanza su ramo
que tanto Cenicienta como Blancanieves intentan atrapar. pero terminan
se mete en una pelea de gatos y entonces el dragón atrapa el ramo
en cambio. El hombre de jengibre ha sido reparado un poco y ahora
tiene una pierna y camina con un bastón de caramelo. shrek y fiona
Aléjese mientras el resto de los invitados festejan y Donkey se hace cargo.
cantando la canción.

HOMBRE DE PAN DE JENGIBRE
Dios nos bendiga a todos.

BURRO
(Cuando termina de cantar y nos desvanecemos
negro) Oh, eso es gracioso. Oh. Oh. No puedo
respirar. No puedo respirar.

EL FIN
`).then(e => console.log(`Código finalizado, ${e} mensajes enviados`)).catch(console.error)
