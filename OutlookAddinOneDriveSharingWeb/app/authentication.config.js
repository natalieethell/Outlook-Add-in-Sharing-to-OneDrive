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
    TOKEN = "EwAoA61DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAWNun2MepVC1C4lfSg+Dunqvw33i8LCHHtzQyG2M6w1qpx8N88fhG2TJ51Z/3QZLR7yUxdcvfQDQ56CMP87JJJB9ixy7BENqPgD31Y3+3tDdDJ7yxS4jh7H3k9IuGydJ9I/A2EISanyuZmBHD0f/szPM5PfcCaPJMz8WnO51sKWaxz7Ru+lUdLDdibr7VlNHrkUGoXkR5iJwqHnqhdP/IljE3hR0Z702OUqR+xDXG7FVGatzhK2hSqujiucKWcufo+u+zvVCF4v7OFX9Sikn/Vne/yP059XhRr6SoHWKficuYjpCNrR5/Jmoh6DTS8SLO5nNPPkQa8GEzFfzNBfpsggDZgAACNpc9esTbSFQ+AFMZLXvFCqKgUL5IjI3nF1c7koeO/R3ll8U9pvW8axLkvj5s+bBhZsIH3f0JWXSkZiD6Kb6/VYvsLLqWYCwDTaqn7EMHHrOrA/5Yx+tg+qdApbC3u/mvTmLRNjZF1ohWVEQT3hnegzJ5Bq7rVO2FmLIOeShA61bE+7jlooDSd385LEwgUO/5GN6ksH/cLH3GsyvcvhOlfijWUfTW2YbSpBdhotc7T/B4YgX+kOfNnVAGH84jcAOOLslSZj10dD7QMYFkydkJMF37Nhhuk2FGEbS0HgUn67FTn4PhzMjzOtbVON36jCNbkptsj15s4GeDkkDMkG5YSaIRBy2QoFvGMMqjOJnwaD5vXaFPh8Zy/aVG7PfMN/l6ly0P5YXtncA1rETe8HBtsas9kXb4mLx8E26SNb5kpVIeYZZgdhddA9b5OcKLSsSy+MvDAwR1tM+X9I6o/Y5aDNy2iO1xD+1BPP7bFGMAxPFSvzJMVnmu0TrvudRtaqzj1vB4Fefm1k0BoQ508n6FSEjy2AJ2Hur5JKEHZZxW6S1oXTHbtjPNC83RK5jJTYqxCFNEltN2lEcoGsXqnv+UKUpkpmEB+6VeMTHxINSMnyRZMB8rNSBKrUekD7hfh4jRifLvErbk+BnYbu0zHiCkKabBCqAsWeNvHLVQmwSHI7pMgARAg==";
