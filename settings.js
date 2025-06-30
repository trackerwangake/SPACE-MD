require('dotenv').config();

module.exports = {
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIALuc3lpFDLqsUgQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rFmOYqYkRHLHJRQOWqrW7sQwkF1ICARaHihP++gT09Mw+7s708FVkZmSfPOVnfQFXjFjmoB9NvoCH4AikajrRvEJiCWZemiIARSCCFYApqg9lRLV3F4sQMg+5F2+a7rvdz3umUmbUwuePG7mRd5tj4FTxGoOmOJY5*U9DTGeGYuPqK2Pr8+nammmwdCq+SrDlKVdZcr4ybRRlZ3vqv4DFUhJjgKjOaHJ0QgaWDeg9i8jn4vD5Ba7tCizsje+LNacYmNtA9nQXuyaa04Q7LUyZGZcZdPwffyRwYIXj8Ws43KivoQbWJpesyZytvebErbT05Mp0YWeswfoff4qxCiZWgimLaf5p3Xq8hLiS7Na+sq+f8jclTwzxSP1K*JnsjuEPOkvkwOVfW54BnssuxdaluxrgOfXfHBPflrSiU*eXsRxERWlcUry*xPNCsX4F75MMrxf*h3TVd3xjHJt7Nlo65PasGfeNkddkk59VX6MFLJzjypqWwLD4Hf+auw5c5j332Fm8t7FKj97yFObsZs4oRQ1*Tx0e7viTGRvwJH9KO*A7lKg82VskFL7pJhcmtTdfbG8kWa4u8BMGlOveSH1*mVdHuTYN6V3JwL+diV1i63rCisZ4rSXSIxps3+6Qeo9R2N1mzzq6vz4kK1FsJmHKPESAowy0lkOK6esZ4aQRgcglRTBB90gvc22SvOF6xZep4yahBimzMT3KvXOL5Zb9zLANr0my7TK*GKxiBhtQxaluULHBLa9KvUNvCDLVg+udfI1ChG30XbmgncCOQYtLSTdU1ZQ2TD1U*LmEc111Fw76KteGACJiyP8OIUlxl7cBjV0ES5*iCtBzSFkxTWLbox4SIoARMKenQj63V6mQgXtQMYbuSfDACp6cgOBk8LomyNBHlsaxIU5H*o*1yHcrCpvlSIQpGoHymSRNeGbOKKIrKeCIMiUP88QPgUC9BFOKyBVOgraEoCBM*j5nl9brfa6GqOqo6kPYx0Icz3plHEpXjg*1GzdU5aGedwDdFf+DVrbCL1rf5ixzEVt7Z9j2b*FMRMAXFTv+aTq7J6ewejhLB4t30F*UlSRRJubexxeQ1ncnlqjvZpajXb9GbV*VJ1DPLW7DLBCt16IEXwsbxGsFMbiKXYVEfbDQCCbrgGP3abCXE8+geZ2kVGyEygutWKNcBdTUZtsdxQATYnTyJFhukYm3vMAuNcr075nDCWiLHK*fTLo8af+0v19RI55aaamH+3bPPnSm*v1X46aZBquE3xei5+hUcBPxv6d6BDw5jH6Nfanx*TP5ty3fdEQnzcEuCyCmO6pEq58PqlGRmwrH3OLgw7E6zjjiMRQ88Hn+NQFNCmtbkBKYAVgmpcQJGgNTdYFmrSuvfNNNU1pr575OXsKXqzzWI8Am1FJ4aMOVkiRM4nh9L71keqZsFbHMwBUKgHARl8HSvNk1IIf3YKqAO32pLweNvUEsBAhQDFAAACAgAu5zeWkUMuqxSBAAAcQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  BOT_ADMIN: process.env.BOT_ADMIN || '254758476795',
  PORT: parseInt(process.env.PORT) || 20087,
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'trackerwangake',
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
