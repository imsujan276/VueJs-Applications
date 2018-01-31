Vue.component('modal', {

	template:`
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-card">
		    <header class="modal-card-head">
		      <p class="modal-card-title">
					<slot name="title"> </slot>
		      </p>
		      <button class="delete" aria-label="close"></button>
		    </header>
		    <section class="modal-card-body">
		      	<slot> </slot>
		    </section>
		    <footer class="modal-card-foot">
		      	<slot name="footer">
					<button class="button is-info">
						Default button
					</button>
		      	</slot>
		    </footer>
		  </div>
		</div>	
	`,

})


Vue.component('my-inline-template', {

	data() {
		return{
			percent : 10,
		}
	}
})



new Vue({

	el: '#root',
})