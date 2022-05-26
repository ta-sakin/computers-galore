import React from "react";
import CountUp from "react-countup";
const BusinessStat = () => {
  return (
    <div className="text-center my-20">
      <div class="stats gap-5 stats-vertical lg:stats-horizontal">
        <div class="stat border-0">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>

          <div class="stat-title">World wide customers</div>
          <div class="stat-value text-primary">
            <CountUp
              end={50.6}
              decimals={1}
              suffix="K+"
              decimal="."
              delay={0}
              duration={1}
            />
          </div>
          <div class="stat-desc">↗︎ 34% more than last month</div>
        </div>
        <div class="stat border-0">
          <div class="stat-figure text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>

          <div class="stat-title ">Total Products</div>
          <div class="stat-value text-cyan-500">
            <CountUp end={100} suffix="+" delay={0} duration={1} />
          </div>
          <div class="stat-desc">All available online</div>
        </div>

        <div class="stat border-0">
          <div class="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Annual Revenue</div>
          <div class="stat-value text-secondary">
            <CountUp
              end={100}
              decimals={1}
              duration={1}
              suffix="M+"
              decimal="."
              delay={0}
            />
          </div>
          <div class="stat-desc">↗︎ 43% more than last year</div>
        </div>

        <div class="stat border-0">
          <div class="stat-figure text-secondary">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img
                  alt="customer"
                  src="https://api.lorem.space/image/face?w=128&h=128"
                />
              </div>
            </div>
          </div>
          <div class="stat-title">Customers satisfaction</div>
          <div class="stat-value">
            <CountUp
              end={99}
              decimals={1}
              suffix="%"
              decimal="."
              delay={0}
              duration={1}
            />
          </div>
          <div class="stat-desc text-secondary">
            Based on 10K+ customer's review
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessStat;
