<template>
	<div class="padding-v">
		<div class="col-md-6 col-md-offset-3 padding-v">
			<router-link class="btn btn-info" to="/student/all">All Students</router-link><br />&nbsp;
			<div class="panel panel-default">

				<div class="panel-heading">
					<h4>Edit Student</h4>
				</div>

				<div class="panel-body">

					<div class="row">
						<div class="col-md-6">
							<input type="text" 
							class="form-control" v-model="first_name"
							 placeholder="Enter First Name" />
						</div>

						<div class="col-md-6">
							<input type="text" 
							class="form-control" v-model="last_name"
							 placeholder="Enter Last Name" />
						</div>
					</div>

					<br />

					<div class="row">
						<div class="col-md-6">
							<input type="text" 
							class="form-control" v-model="entry.reg_number"
							 placeholder="Reg. Number"  disabled="true" />
						</div>

						<div class="col-md-6">
							<select class="form-control" v-model="entry.department">
								<option v-for="department in departments" :value="department.id">{{department.department_name}}</option>
							</select>
						</div>
					</div>

					<br />

					<div class="row">
						<div class="col-md-12">
							<textarea type="text" 
							class="form-control one-whole" v-model="entry.address"
							 placeholder="Enter Address" ></textarea>
						</div>
					</div>
					<br />
					<div class="row">
						<div class="col-md-12">
							<button type="text" @click="submit" 
							class="btn btn-info one-whole no-outline"> Edit Student </button>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';

	export default{
		data : function (){
			return{
			current_student : this.$route.params.id,
				departments : null,
				first_name 	: null,
				last_name 	: null,
				entry : {
					name 		: this.full_name,
					address 	: null,
					department 	: null,
					reg_number 	: null
				}
			}
		},
		mounted : function(){
			axios({
				url 	:'/api/v1/department/all',
				method 	:'get'
			}).then(function(response){
				this.departments = response.data.data
			}.bind(this));

			axios({
				url 	:`/api/v1/student/${this.current_student}`,
				method 	:'get'
			}).then(function(response){

				if(response.data.data.length>0)
				{

					let current = response.data.data[0];
					let names = current.name.split(" ");
					console.warn(names)
					this.first_name = names[0];
					this.last_name = names[1];
					this.entry.name = current.name;
					this.entry.address = current.address;
					this.entry.department = current.department;
					this.entry.reg_number = current.reg_number;
				}

			}.bind(this));
		},
		  watch: {
		    first_name: function (val) {
		      this.entry.name = val + ' ' + this.last_name
		    },
		    last_name: function (val) {
		      this.entry.name = this.first_name + ' ' + val
		    }
		},
		methods : {
			submit : function()
			{
				axios({
					url 	: '/api/v1/student/edit/'+this.current_student,
					method 	: 'put',
					data 	: this.entry
				}).then(function(e){
					if(e.data.status == 'success')
					{
						swal('Success','Record has been Edited','success');

					}
					else
					{
						let errors = "";

						for (var i = 0; i < e.data.errors.length; i++) {
							errors += e.data.errors[i].msg +"\n";
						}
						console.warn(e.data);
						swal('Error',+errors,'error');
					}
				})
			}
		}
	}
</script>