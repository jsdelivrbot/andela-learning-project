<template>
	<div class="container padding-v">

		<span class="pull-right"><router-link class="btn btn-info" to="/student/create">Create Student</router-link></span>
		<h4  v-if="students" > Showing All Students</h4>
		<table class="table table-hover table-striped table-bordered" v-if="students" >
			<thead>
				<tr>
					<th>
						Name
					</th>
					<th>
						Reg. Number
					</th>
					<th>
						Address
					</th>
					<th>
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="student in students">
					<td>
						{{student.name}}
					</td>
					<td>
						{{student.reg_number}}
					</td>
					<td>
						{{student.address}}
					</td>
					<td>
						<router-link :to="`/student/edit/${student.id}`" class="btn btn-success"><span class="fa fa-cog"></span> Edit</router-link>
						<button class="btn btn-danger" @click="delete_student(student.id)"><span class="fa fa-trash-o"></span> Delete</button>
					</td>
				</tr>
			</tbody>
		</table>

		<div v-else>
			<h3 align="center" class="text-muted"><br/> <br /><br/> <br /><br/> <br />
				You Currently have no Students at the moment, click 
				<router-link to="/student/create">here</router-link>
				to add Students
			</h3>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios';
	export default {
		data : function (){
			return {
				students : null
			}
		},
		mounted:function()
		{
			this.fetchStudents();
		},
		methods :{
			delete_student : function(id)
			{
				let _this = this
				swal({
						title : "Deleting Student",
						icon : "warning",
						text : "sure to delete?",
						buttons: [true,"Yes, Delete"]
				}).then(function(e){
					if(e)
					{
						axios({
							url : '/api/v1/student/delete/'+id,
							method : 'delete'
						}).then(function(e){
							if(e.data.status == 'success')
							{
								swal('Success', 'Student has been Deleted', 'success');
								_this.fetchStudents();
							}
							else
							{
								swal("Error", 'An Error Occorred', 'error');
							}
						})
					}
				});
			},
			fetchStudents : function()
			{
				axios({
					method:'get',
					url : '/api/v1/student/all'
				}).then(function(response){
					this.students = response.data
				}.bind(this));
			}
		}
	}
</script>