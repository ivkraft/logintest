# logintest
Testing Login Page as QA
This is Login Page with Cookies for testing ( my way JMeter)
You must have .env in the root / 
Format .env
> 
>API_PORT=4001
>
>MONGO_URI="mongodb+srv://"LOGIN":"PASSWORD"@"cluster".mongodb.net/?retryWrites=true&w=majority">
>
>TOKEN_KEY="<KEY>"
>
>certificate="localhost.crt"
>
>privateKey="localhost.key"
  
For the sertificate you can use this 
>  openssl req -x509 -out localhost.crt -keyout localhost.key \
>  -newkey rsa:2048 -nodes -sha256 \
>  -subj '/CN=localhost' -extensions EXT -config <( \
>   printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
                                                   
                                               
It will create key ( private ) and certificate ( public )
                                                   
