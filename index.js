const url = "https://raw.githubusercontent.com/libensvivit/sandsandcastles/main/transactions.csv";

dfd.read_csv(url)
    .then(df => {
        //df.plot("div2").table()
        //df.head().print()
        //df["Ημέρα"].print();

        df.rename({
            mapper: {
                "Ημέρα": "Date",
                "Προϊόν": "Stock",
            },inplace: true
        });
        console.log(df.columns);

    
        var sub_df = df.loc({rows: [":"], columns: ["Date","Stock"]})

        //DEBUG
        sub_df.plot("div1").table();
        sub_df.print();
        //document.getElementById("div1").innerText = sub_df.v;

    }).catch(err => {
        console.log(err);
    })