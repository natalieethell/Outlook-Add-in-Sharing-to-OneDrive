/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

'use strict';

var TENANT_ID = "common",
    AUTH_ENDPOINT = "https://login.microsoftonline.com/" + TENANT_ID + "/oauth2/v2.0",
    CLIENT_ID = "",
    REDIRECT_URI = "https://localhost:44300/authorize/authorize.html",
    GRAPH_ID = "https://graph.microsoft.com",
    SCOPES = "wl.signin wl.offline_access onedrive.readwrite",
    TOKEN = "EwAAA61DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAQXSHW9RgES/RUkf88+SLW4Xh03it/H99Sh3CPdyO6EIfMTYeJ7qTI6dIC6j3/W/E8wXiCVYUWAvaqoxlNZ6Q8XI4M6ut2gdx4tBws7XCk2dnwjOEOVA0utQfZ8E/uiMERBL4f9korMb/v29R4QeXOiFYLHiuTwhfWq5uQLKxNi8jFD7h/4CBAC+T+ul5am1jpXHQliNpiSelsXqputupM+nuXX1rASSdWjfJY+rgLy6LLJTo9UWiBR8ptGoSY4HPDFirCnEaK8AEDWq+6Tgv6QKiUiBJzZp+Y6rMYnijYJ1V7S03nDwz00x/VGX2obJ35eWtnlzyQuiL927h51uqZcDZgAACF0SmVra8WHB0AEP6sS2HJ6lY2AOK7SQ5gXLFI2pwnHMbiDC0D7EJusKIfX5MBwVm1lfQs+WS/v9/fPKa+OlcbYIFLFYfy+T5j+Vk6+jniUiFk/gjEFGit6G1xWcJtvYwZmXX+uDvWpX2+1BiMMnV3o4y0UrgJ64ixyfxwWu+DnvZfRvwWQyTXiAWBRX5malm+26SYw6Ei2nsZxHVIIVuKWLFwR3QlyWTrdmPNw2s9m8ITfmBQZu1PKGDHbZIASl87Pc4k0+HAKfiGfEKljQt5vbvpkIUGBhdedjlyyIIKwPvvy4AYqQgk3EUI4ccgZeRR27jdYb7RbJKm4j1UfJ/vQOqDBiQE/ZZc1IqLY1E7lnC+JgfJad1G3tOU6rMQH6prvrZ3/f/7DASunp72pwZvVh5CXGnz31tR9ooRSa3iZwbFI2OStxUu7/Y9I+ln1JH7T3pTrIdJcXjXSyW/KJDt39nLROcEFzvbvYk4ixNKJcmTEyUfH8O7zpVexmjFeIArkfO4Ytf86baf96237TG1cJzAZLfUnnxWKh6JrmOBJeGaAU9Z1ndHw1C3SFhDq/AtEit+VnLx7HGxPrPTtTz0UyOye7viGPqpxUb1Ggk+vz2vQnQznWyRQmrfgB";
