/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
	/*
	$("#main").append("Xi He</br>");
	var awesomeThoughts = "I am Xi He and I am awesome";
	console.log(awesomeThoughts);
	var funThoughts = awesomeThoughts.replace("awesome","fun");
	$("#main").append(funThoughts);
	var formattedName, formattedRole;
	formattedName = HTMLheaderName.replace("%data%","Xi He");
	formattedRole = HTMLheaderRole.replace("%data%","student");
	$("#header").append(formattedRole);
	$("#header").prepend(formattedName);
	
	
	var bio = {
		"name" : "Xi He",
		"role" : "Web Engineer"	
	};
	$("#header").prepend(bio.role);
	$("#header").prepend(bio.name);
	*/
	
	var work, projects, bio, education;
	
	work = {
		"jobs" : [
			{
				"employer" : "GSU",
				"title" : "Teaching Assistant",
				"location" : "Atlanta",
				"dates" : "200808",
				"description" : "PHD job"
			}
		]
	};
	
	projects = {
		"projects" : [
			{
				"title" : "PPQ",
				"dates" : " 2011",
				"description" : "research project",
				"images" : "/home"
			}
		]
	};
	
	bio = {
		"name" : "Xi He",
		"role" : "Web developer",
		"welcomeMessage" : "Welcome",
		"biopic" : "/home",
		"contacts" : {
			"mobile" : "4045183581",
			"email" : "hexi111@gmail.com",
			"github" : "hexi111",
			"twitter" : "hexi111",
			"location" : "Atlanta"
		},	
		"skills" : ["handsome","funny","honest"]
	};
	
	education = {
		"schools" : [
			{
				"name" : "GSU",
				"location" : "Atlanta",
				"degree" : "PhD",
				"dates" : 2010,
				"url" : "gsu.edu",
				"majors" : ["cs","data visualization"]
			}
		],
		"onlineCourses" : [
			{
				"title" : "javascript",
				"school" : "udacity",
				"date" : 2012,
				"url" : "udacity.com"			
			}
		]
	};