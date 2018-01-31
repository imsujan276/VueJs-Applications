window.Event = new Vue();

Vue.component('coupon', {

	template: `
		<input 
			placeholder="Enter Coupon CODDE" 
			@blur="onCouponApplied"
		>
		`,

	methods: {
		onCouponApplied() {
			// calls oown function
			// alert('asd');

			// broadcast 'applied' ( data is optional )
			//this.$emit('applied');  
			Event.$emit('coupon-applied');

			// listen to the broadcast 'applied'
			// this.$on( 'applied', function(){
			// 	alert('applied');
			// });
		}
	}
})




new Vue({

	el: '#root',

	data: {
		couponApplied : false,
	},

	// methods: {

	// 	onCouponApplied() {
	// 		alert('Alert From Parent');
	// 		this.couponApplied = true;
	// 	}
	// }

	created() {
		Event.$on('coupon-applied', () => {
			alert(' Handling From Parent');
			this.couponApplied = true;
		})
	}


	
})