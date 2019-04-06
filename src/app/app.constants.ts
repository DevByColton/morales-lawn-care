export class AppConstants {
    public static APPLICATION_NAME = 'CM Lawn Mowing';
    public static PHONE = '(512)-501-0390';
    public static DEV_EMAIL = 'developmentbycolton@outlook.com';
    public static FOOTER_MESSAGE = 'Notice problems with the website? Email ' + AppConstants.DEV_EMAIL;

    // Prices
    public static QUATER_ACRE_PRICE = 40; // Not using right now, but keep for possible future use
    public static HALF_ACRE_PRICE = 50;
    public static ONE_ACRE_PRICE = 70;
}

export class RouteConstants {
    public static HOME_ROUTE = '';
    public static PRICING_ROUTE = 'pricing';
    public static AVAILABILITY_ROUTE = 'availability';
    public static ABOUT_ME = 'about-me';
    public static CONTACT_ME_ROUTE = 'contact-me';
}