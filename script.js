document.addEventListener("DOMContentLoaded", function () {

    console.log("TechFlow App Loaded Successfully.");

    const calcButton = document.getElementById("calc-btn");

    if (calcButton) {

        calcButton.addEventListener("click", function () {

            console.log("კალკულატორის ღილაკზე დაჭერა დაფიქსირდა...");


            // პაკეტის არჩევა
            const planSelectElement =
                document.getElementById("plan-select");


            // არჩეული პაკეტის ფასი
            const planPrice =
                parseFloat(planSelectElement.value);


            // მომხმარებლების რაოდენობა
            const userCountInput =
                document.getElementById("user-count");


            // FIX: .val-ის ნაცვლად .value
            const userCount =
                parseInt(userCountInput.value);


            // თვეების რაოდენობა
            const monthCountInput =
                document.getElementById("month-count");


            const monthCount =
                parseInt(monthCountInput.value);


            // მონაცემების შემოწმება
            if (
                isNaN(planPrice) ||
                isNaN(userCount) ||
                isNaN(monthCount)
            ) {

                console.error(
                    "გთხოვთ შეიყვანოთ სწორი რიცხვითი მნიშვნელობები."
                );

                return;
            }


            // საბოლოო თანხის გამოთვლა
            const totalCost =
                planPrice * userCount * monthCount;


            // შედეგის ელემენტი
            const resultDisplay =
                document.getElementById(
                    "total-price-display"
                );


            // შედეგის ჩვენება
            resultDisplay.innerText =
                "$" + totalCost;


            console.log(
                "გამოთვლილი თანხა: $" + totalCost
            );

        });

    }

});