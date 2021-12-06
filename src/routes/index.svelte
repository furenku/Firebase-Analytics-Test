<script>
	import { onMount } from 'svelte';
	
	
	
	onMount(async () => {
		
        
        const firebaseApp = (await import('firebase/app'));
		const firebaseAnalytics = (await import('firebase/analytics'));


		const initializeApp = firebaseApp.initializeApp
		const getAnalytics = firebaseAnalytics.getAnalytics

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
        
        
        const analytics = getAnalytics(app);


	});

</script>

<h1>Firebase Analytics Test</h1>

