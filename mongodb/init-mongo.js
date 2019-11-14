db.createUser(
	{
		user: 'demouser',
		pwd: 'demopassword',
		roles: [
			{
				role: 'readWrite',
				db: 'docker_demo'
			}
		]
	}
)


		
