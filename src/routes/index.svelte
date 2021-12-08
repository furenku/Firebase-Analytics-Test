<script>
	import { onMount } from 'svelte';
	
	
	let initializeApp
    let getAnalytics
    let logEvent
    let fbAnalytics
    
	onMount(async () => {
		
        
        const firebaseApp = (await import('firebase/app'));
		const firebaseAnalytics = (await import('firebase/analytics'));


		initializeApp = firebaseApp.initializeApp
		getAnalytics = firebaseAnalytics.getAnalytics
		logEvent = firebaseAnalytics.logEvent

        const firebaseConfig = {
            apiKey: "AIzaSyDdRRGO_rd28JwkIM4SOd7bEeokbIwhpRo",
            authDomain: "fatest-502c7.firebaseapp.com",
            projectId: "fatest-502c7",
            storageBucket: "fatest-502c7.appspot.com",
            messagingSenderId: "148486833157",
            appId: "1:148486833157:web:3dfc089271a654a5f0c86c",
            measurementId: "G-Y6R9H1LYWJ"
        };


        
        const app = initializeApp(firebaseConfig);
        
        
        fbAnalytics = getAnalytics(app);


	});




    const enviarEvento = () => {
        
        console.log( fbAnalytics )
        logEvent(fbAnalytics, "fatest_evento", {
           dato_personalizado: "Dato de prueba"
        })
        // logEvent(fbAnalytics, "level_start", {
        //    level_name: "Nivel 1"
        // })
        
        // console.log("enviar evento");

    }

</script>

<h1>Firebase Analytics Test</h1>



<button on:click={enviarEvento}>
    Enviar Evento
</button>
