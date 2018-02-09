export class AppConstants{
    //API Url endpoints
    public static BASE_URL = "/api/"
    public static DARK_STORE_URL = "/api/deliveries/"

    public static WSAG_CERT_CLIENT_ID          = "209a4427-b1f3-4d88-8454-74941f31e25c"
    public static WSAG_CERT_CLIENT_SECRET      = "a31c3280-2d0f-4811-b354-6927d9c488d5"
    
    public static WSAG_PROD_CLIENT_ID          = "0aa20ac5-874e-4bbe-b7b8-8359544efc94"
    public static WSAG_PROD_CLIENT_SECRET      = "691b4cd6-ee58-45f1-935a-8e1f47e4124a"
    
    public static PROD_SERVER_API_KEY          = "l7xx02aae39cb4d84e5b804408ab5aefebc5"
    public static CERT_SERVER_API_KEY          = "l7xxd2f7f632271e481fa1e615c4a383f5ad"
    public static DEV_SERVER_API_KEY           = "l7xxd2f7f632271e481fa1e615c4a383f5ad"
    
    public static API_HUB_API_KEY              = "l7xxa9145772ae6244b785890bb60ce55ba1"
    public static CM_API_HUB_KEY               = "l7xxb41827f429bc4c89a6a6d97404b3c684"
    public static HEB_DOT_COM_API_KEY          = "l7xxa9145772ae6244b785890bb60ce55ba1"

    public static CONFIG = {
        responseType: 'application/json',
        headers: {
            'Authorization': 'Bearer' + window.sessionStorage.getItem('access_token'),
            'apikey': AppConstants.CERT_SERVER_API_KEY
        }
    }

    public static PDFConfig = {
        responseType: 'blob',
        headers: {
            'Authorization': 'Bearer' + window.sessionStorage.getItem('access_token'),
            'apikey': AppConstants.CERT_SERVER_API_KEY
        }
    }

    public static orderDetailQuantityTypeGood = "1"
    public static orderDetailQuantityTypeDamaged = "2"
    public static orderDetailQuantityTypeMissing = "3"

    //Container Identifiers
    public static cartIdentifer = "crt"
    public static packageIdentifier = "pkg"
    public static SYSTEM_PACKAGE_IDENTIFIER = "syspkg"
    public static slotIdentifier = "slt"
    public static dashIdentifier = "-"
    public static ORDER_IDENTIFIER = "UTA"
    public static TEST_ORDER_IDENTIFIER = "TEST"

    // Product Available Actions
    public static PRODUCT_DAMAGE_AVAILABLE_ACTION  = "2"
    public static PRODUCT_LOST_AVAILABLE_ACTION    = "9"
    public static PRODUCT_SHORT_AVAILABLE_ACTION   = "4"
    public static PRODUCT_ABANDON_AVAILABLE_ACTION = "5"
    
    
    // Package Available Actions
    public static PACKAGE_DAMAGE_AVAILABLE_ACTION      = "1"
    public static PACKAGE_LOST_AVAILABLE_ACTION        = "9"
    public static PACKAGE_SHORT_AVAILABLE_ACTION       = "4"
    public static PACKAGE_SURPLUS_AVAILABLE_ACTION     = "?"
    public static PACKAGE_EXCEPTION_ALERT_WARNING      = "Are you sure you want to apply this change to package %@ and all of its contents?"

    public static PackageActions = {
          receive: "Receive",
          putaway: "Putaway",
          retrieve: "Retrieve",

          damage: "Damage",
          short: "Short",
          lost: "Lost",
          surplus: "Surplus"
    }

    public static ProductActions = {
        damage: "Damage",
        short: "Short",
        lost: "Lost",
        surplus: "Surplus"
    }

    public static Modules = {
        receive: 0,
        putaway: 1,
        order: 2,
        task: 3
    }






}