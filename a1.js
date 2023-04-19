
<!DOCTYPE html>
 	 
 	<html>
 	 
 	 
 	<head>
 	 
 	</head>
 	 
 	<body>
 	 
 	 
 	<h1> MultiplicationTable</h1>
 	 
 	 
 	<label>Rows</label>
 	 
 	<input type="rows" id="rows" />
 	 
 	<label>Cols</label>
 	 
 	<input type="cols" id="cols" />
 	 
 	 
 	<input type="button" value="Create" onclick="multiplicationTable()" />
 	 
 	<br><br><br>
 	 
 	 
 	<script type="text/javascript">
 	 
 	 
 	function multiplicationTable() {
 	 
 	 
 	 
 	 
 	var rows=document.getElementById("rows").value;
 	 
 	var cols=document.getElementById("cols").value;
 	 
 	if(rows == "" || rows == null)
 	 
 	rows = 10;
 	 
 	if(cols== "" || cols== null)
 	cols = 10;
 	 
 	createTable(rows, cols);
 	 
 	}
 	 
 	 
 	 
 	function createTable(rows, cols)
 	 
 	{
 	 
 	var j=1;
 	 
 	var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
 	 
 	for(i=1;i<=rows;i++)
 	{
 	output = output + "<tr>";
 	 
 	while(j<=cols)
 	{
 	output = output + "<td>" + i*j + "</td>";
 	j = j+1;
 	}
 	output = output + "</tr>";
 	j = 1;
 	}
 	output = output + "</table>";
 	 
 	document.write(output);
 	 
 	}
 	 
 	 
 	 
 	 
 	 
 	</script>
 	 
 	</body>
 	 
 	</html>
 