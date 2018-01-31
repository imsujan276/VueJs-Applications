Vue.component('modal', {

	template: `
		<div class="modal is-active">
		  <div class="modal-background"></div>
		  <div class="modal-content">
		    <slot> </slot>
		  </div>
		  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
		</div>
	`,
});

Vue.component('message-panel', {

	props: ['title', 'message'],

	data(){
		return {
			isVisible: true,
		}
	},

	template: `
		<article class="message" v-show="isVisible">
		  <div class="message-header">
		    <p>
				{{ title }}
		    </p>
		    <button class="delete" aria-label="delete" @click="isVisible = false"></button>
		  </div>
		  <div class="message-body">
		    {{ message }}
		  </div>
		</article>
		`,
});


Vue.component('task', {
	template: '<li> <slot></slot>  </li>'
});


Vue.component('task-list', {
	template: `
		<div>
			<task v-for="task in Alltasks"  :key="task.title"> {{task.title}} </task>
		</div>
		`,

	data(){  // data of components is a function
		return{
			Alltasks: [
							{ title: "first task", completed: false},
							{ title: "second task", completed: true},
							{ title: "third task", completed: false},
							{ title: "fourth task", completed: false},
							{ title: "fifth task", completed: true},
						],
		};
	}
});




var app = new Vue ({

					el: '#root',  // ID of element within which this vue eleent will work

					data: {    // data avails the data in that element

						message : "This is message",
						colors: ['Red', 'Green', 'Blue'],
						newName : '',
						isLoading : false,
						tasks: [
								{ title: "first task", completed: false},
								{ title: "second task", completed: true},
								{ title: "third task", completed: false},
								{ title: "fourth task", completed: false},
								{ title: "fifth task", completed: true},
							],
						showModal: false,
					},

					methods: {

						addColors(){
							this.colors.push(this.newName);
							this.newName = '';
						},

						toggleMe(){
							this.isLoading = !this.isLoading;
						}
					},

					computed: {

						incompleteTasks(){
							return this.tasks.filter(task => !task.completed);
						}
					},

					mounted(){   // acts like constructor

					}

				})