using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebRealEste.Client.Config
{
    public class Config
    {
#if DEBUG
        public static string HostName = "localhost:70/WebAPI";
        public static string ApiUrl = $"http://{HostName}";
        public static string HostRate = "localhost:70/InterestRate";
        public static string RateUrl = $"http://{HostRate}";

        //public static string HostName = "localhost:8080/WebAPI";
        //public static string ApiUrl = $"https://{HostName}";

        //public static string HostRate = "1f8848390ea8.ngrok.io/InterestRate";
        //public static string HostName = "1f8848390ea8.ngrok.io/WebAPI";
        //public static string ApiUrl = $"https://{HostName}";
        //public static string RateUrl = $"https://{HostRate}";
#else
        public static string HostName = "realesteapi.somee.com";
        public static string ApiUrl = $"http://{HostName}";
#endif
    }
}
