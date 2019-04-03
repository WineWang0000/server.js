if(path === '/pay' && method.toUpperCase() ==="POST"){
	var newAmount = fs.readFileSync ('./data', 'utf8')
	var newAmount = amound - 1
	fs.writeFileSync('./data', newAmount)
	response.write('success')
	response.end()
}
