# simple nuxt proxy

proxy a nuxt app to fake domain with SSL.

## Setup

1. edit hosts file

`sudo vim /etc/hosts`

2. add following line:

`127.0.0.1  dev.shortwavaudio.co`

3. generate certificates

`minica --domains 'dev.shortwavaudio.co'`
