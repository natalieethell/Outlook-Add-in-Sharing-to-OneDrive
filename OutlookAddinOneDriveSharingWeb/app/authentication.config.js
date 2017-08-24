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
    TOKEN = "EwAoA61DBAAUGCCXc8wU/zFu9QnLdZXy+YnElFkAAaEeyn5ovfgBSPNAxP0tbSmxVJZF0AmLDW/yq+GQS5vIrW/NCtj0X+tmF8rJmciP6Kx6FQTBmt/BnVtGW7VZEZBvHmv8Vz5nS5SaZ6y5Eks6ftheNrt9s3xlj0bK6ZQbz6kzOWXqX4G4rPqT1wcrqsTK48rvkN2drPUTreoYFFWY2OBo9bn1RdRKX4MhWPHc7X2sxlYGVle3NcqPpX7h7BpaSOk9v0+JwaiKq1Y2FwTKbxHUg9A3P4ka3DFPX1XMxZtCQNB4C1r4cotmzEjcpvaB34zp6IlqoyzEFrpVlR7mWnOrlB6hBezm+U2s15hmNNQ8koOiov/GX7UuVtz8Hq8DZgAACEp1nzdSq5pK+AEvDKt+4ScyG7YosNayRokQOS+La7KLrtX1R/ULR8wBUv/qVWSSI3eKJOiiFTULeT+N7P1HzqGOTjAKSY6Ie+KHDYuNvlfbSJDKP07Z/gKAUFri0qOg0zoSGwlb3r/I4XMT9kqv28rf9KG/SLOnZrsHhfN6ZhYt119H0jubYLnTGUezxnbth6V8uqRHkb26cbM+PlkKd9tWGUEsVz8cHBKFkIkFUW1C6hmKapZPbjjQ7+LQMkwCOZa1xIyfBjL0Hm1JDPDxZsR+0+OzjsMTJ1P+iklfK1fiev+FUjS4SIV14IdYP/QcQlS7RbaBw+kdmVCePPe+dy7Nwe1S9Bx94TxrW/aqzkbWupZItqLRx82yeGciloU/dyrhOJizWLP+W+vYUP33dSyw9BqVPqcxeC8qxd/hBDO0mAkV2y1rXQm7k53/lJvnb3oAeSWzkHniT6nP6TrHftfKO/NDb/qBzjbN9X8ki9Yh9dHLnufLnMCMnV5k+FIjrcTUr+R85M5m7xyTxeLebo7ttAbeDRcU1KAuiGCELzPIhKkICR3Zsck0vOZ8wPYO0iycLL/n+O0yi+6wzUDfRoW76AZJeQnRKsGRX+fzeGmlZAQKrUAgVa5NJ8TC5hy0zNBXBwbnVwv8YwjSKsS+MU/+pvr21DCVOY1HAe71UFZ7AoYRAg==";
