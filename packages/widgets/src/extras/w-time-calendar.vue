<template>
  <div class="w-time-calendar">
    <div kendo-timeselector class="k-widget k-timeselector">
      <div class="k-time-header">
        <span class="k-title">12:42 AM</span>
        <button class="k-button k-bare k-time-now" type="button" title="Select now" aria-label="Select now">Now</button>
      </div>
      <div class="k-time-list-container">
        <span class="k-time-highlight"></span>
        <div class="k-time-list-wrapper" role="presentation" tabindex="-1">
          <span class="k-title">hour</span>
          <div kendo-timelist data-timelist-index="0" tabindex="0" class="k-time-list">
            <div kendo-virtualization class="k-time-container k-content k-scrollable" role="presentation" tabindex="-1">
              <ul class="k-reset" style="transform: translateY(0px);">
                <li class="k-item" data-timelist-item-index="0"><span>12</span></li>
                <li class="k-item" data-timelist-item-index="1"><span>1</span></li>
                <li class="k-item" data-timelist-item-index="2"><span>2</span></li>
                <li class="k-item" data-timelist-item-index="3"><span>3</span></li>
                <li class="k-item" data-timelist-item-index="4"><span>4</span></li>
                <li class="k-item" data-timelist-item-index="5"><span>5</span></li>
                <li class="k-item" data-timelist-item-index="6"><span>6</span></li>
                <li class="k-item" data-timelist-item-index="7"><span>7</span></li>
                <li class="k-item" data-timelist-item-index="8"><span>8</span></li>
                <li class="k-item" data-timelist-item-index="9"><span>9</span></li>
                <li class="k-item" data-timelist-item-index="10"><span>10</span></li>
                <li class="k-item" data-timelist-item-index="11"><span>11</span></li>
                <li class="k-item" data-timelist-item-index="12"><span>12</span></li>
                <li class="k-item" data-timelist-item-index="13"><span>1</span></li>
                <li class="k-item" data-timelist-item-index="14"><span>2</span></li>
                <li class="k-item" data-timelist-item-index="15"><span>3</span></li>
                <li class="k-item" data-timelist-item-index="16"><span>4</span></li>
                <li class="k-item" data-timelist-item-index="17"><span>5</span></li>
                <li class="k-item" data-timelist-item-index="18"><span>6</span></li>
                <li class="k-item" data-timelist-item-index="19"><span>7</span></li>
                <li class="k-item" data-timelist-item-index="20"><span>8</span></li>
                <li class="k-item" data-timelist-item-index="21"><span>9</span></li>
                <li class="k-item" data-timelist-item-index="22"><span>10</span></li>
                <li class="k-item" data-timelist-item-index="23"><span>11</span></li>
              </ul>
              <div class="k-scrollable-placeholder" style="height: 0px;"></div>
            </div>
          </div>
        </div>
        <div class="k-time-separator">
          :
        </div>
        <div class="k-time-list-wrapper k-state-focused" role="presentation" tabindex="-1">
          <span class="k-title">minute</span>
          <div kendo-timelist data-timelist-index="2" tabindex="0" class="k-time-list">
            <div kendo-virtualization class="k-time-container k-content k-scrollable" role="presentation" tabindex="-1">
              <ul class="k-reset" style="transform: translateY(0px);">
                <li class="k-item" data-timelist-item-index="0"><span>00</span></li>
                <li class="k-item" data-timelist-item-index="1"><span>01</span></li>
                <li class="k-item" data-timelist-item-index="2"><span>02</span></li>
                <li class="k-item" data-timelist-item-index="3"><span>03</span></li>
                <li class="k-item" data-timelist-item-index="4"><span>04</span></li>
                <li class="k-item" data-timelist-item-index="5"><span>05</span></li>
                <li class="k-item" data-timelist-item-index="6"><span>06</span></li>
                <li class="k-item" data-timelist-item-index="7"><span>07</span></li>
                <li class="k-item" data-timelist-item-index="8"><span>08</span></li>
                <li class="k-item" data-timelist-item-index="9"><span>09</span></li>
                <li class="k-item" data-timelist-item-index="10"><span>10</span></li>
                <li class="k-item" data-timelist-item-index="11"><span>11</span></li>
                <li class="k-item" data-timelist-item-index="12"><span>12</span></li>
                <li class="k-item" data-timelist-item-index="13"><span>13</span></li>
                <li class="k-item" data-timelist-item-index="14"><span>14</span></li>
                <li class="k-item" data-timelist-item-index="15"><span>15</span></li>
                <li class="k-item" data-timelist-item-index="16"><span>16</span></li>
                <li class="k-item" data-timelist-item-index="17"><span>17</span></li>
                <li class="k-item" data-timelist-item-index="18"><span>18</span></li>
                <li class="k-item" data-timelist-item-index="19"><span>19</span></li>
                <li class="k-item" data-timelist-item-index="20"><span>20</span></li>
                <li class="k-item" data-timelist-item-index="21"><span>21</span></li>
                <li class="k-item" data-timelist-item-index="22"><span>22</span></li>
                <li class="k-item" data-timelist-item-index="23"><span>23</span></li>
                <li class="k-item" data-timelist-item-index="24"><span>24</span></li>
                <li class="k-item" data-timelist-item-index="25"><span>25</span></li>
                <li class="k-item" data-timelist-item-index="26"><span>26</span></li>
                <li class="k-item" data-timelist-item-index="27"><span>27</span></li>
                <li class="k-item" data-timelist-item-index="28"><span>28</span></li>
                <li class="k-item" data-timelist-item-index="29"><span>29</span></li>
                <li class="k-item" data-timelist-item-index="30"><span>30</span></li>
                <li class="k-item" data-timelist-item-index="31"><span>31</span></li>
                <li class="k-item" data-timelist-item-index="32"><span>32</span></li>
                <li class="k-item" data-timelist-item-index="33"><span>33</span></li>
                <li class="k-item" data-timelist-item-index="34"><span>34</span></li>
                <li class="k-item" data-timelist-item-index="35"><span>35</span></li>
                <li class="k-item" data-timelist-item-index="36"><span>36</span></li>
                <li class="k-item" data-timelist-item-index="37"><span>37</span></li>
                <li class="k-item" data-timelist-item-index="38"><span>38</span></li>
                <li class="k-item" data-timelist-item-index="39"><span>39</span></li>
                <li class="k-item" data-timelist-item-index="40"><span>40</span></li>
                <li class="k-item" data-timelist-item-index="41"><span>41</span></li>
                <li class="k-item" data-timelist-item-index="42"><span>42</span></li>
                <li class="k-item" data-timelist-item-index="43"><span>43</span></li>
                <li class="k-item" data-timelist-item-index="44"><span>44</span></li>
                <li class="k-item" data-timelist-item-index="45"><span>45</span></li>
                <li class="k-item" data-timelist-item-index="46"><span>46</span></li>
                <li class="k-item" data-timelist-item-index="47"><span>47</span></li>
                <li class="k-item" data-timelist-item-index="48"><span>48</span></li>
                <li class="k-item" data-timelist-item-index="49"><span>49</span></li>
                <li class="k-item" data-timelist-item-index="50"><span>50</span></li>
                <li class="k-item" data-timelist-item-index="51"><span>51</span></li>
                <li class="k-item" data-timelist-item-index="52"><span>52</span></li>
                <li class="k-item" data-timelist-item-index="53"><span>53</span></li>
                <li class="k-item" data-timelist-item-index="54"><span>54</span></li>
                <li class="k-item" data-timelist-item-index="55"><span>55</span></li>
                <li class="k-item" data-timelist-item-index="56"><span>56</span></li>
                <li class="k-item" data-timelist-item-index="57"><span>57</span></li>
                <li class="k-item" data-timelist-item-index="58"><span>58</span></li>
                <li class="k-item" data-timelist-item-index="59"><span>59</span></li>
              </ul>
              <div class="k-scrollable-placeholder" style="height: 0px;"></div>
            </div>
          </div>
        </div>
        <div class="k-time-separator">
          :
        </div>
        <div class="k-time-list-wrapper" role="presentation" tabindex="-1">
          <span class="k-title">second</span>
          <div kendo-timelist data-timelist-index="2" tabindex="0" class="k-time-list">
            <div kendo-virtualization class="k-time-container k-content k-scrollable" role="presentation" tabindex="-1">
              <ul class="k-reset" style="transform: translateY(0px);">
                <li class="k-item" data-timelist-item-index="0"><span>00</span></li>
                <li class="k-item" data-timelist-item-index="1"><span>01</span></li>
                <li class="k-item" data-timelist-item-index="2"><span>02</span></li>
                <li class="k-item" data-timelist-item-index="3"><span>03</span></li>
                <li class="k-item" data-timelist-item-index="4"><span>04</span></li>
                <li class="k-item" data-timelist-item-index="5"><span>05</span></li>
                <li class="k-item" data-timelist-item-index="6"><span>06</span></li>
                <li class="k-item" data-timelist-item-index="7"><span>07</span></li>
                <li class="k-item" data-timelist-item-index="8"><span>08</span></li>
                <li class="k-item" data-timelist-item-index="9"><span>09</span></li>
                <li class="k-item" data-timelist-item-index="10"><span>10</span></li>
                <li class="k-item" data-timelist-item-index="11"><span>11</span></li>
                <li class="k-item" data-timelist-item-index="12"><span>12</span></li>
                <li class="k-item" data-timelist-item-index="13"><span>13</span></li>
                <li class="k-item" data-timelist-item-index="14"><span>14</span></li>
                <li class="k-item" data-timelist-item-index="15"><span>15</span></li>
                <li class="k-item" data-timelist-item-index="16"><span>16</span></li>
                <li class="k-item" data-timelist-item-index="17"><span>17</span></li>
                <li class="k-item" data-timelist-item-index="18"><span>18</span></li>
                <li class="k-item" data-timelist-item-index="19"><span>19</span></li>
                <li class="k-item" data-timelist-item-index="20"><span>20</span></li>
                <li class="k-item" data-timelist-item-index="21"><span>21</span></li>
                <li class="k-item" data-timelist-item-index="22"><span>22</span></li>
                <li class="k-item" data-timelist-item-index="23"><span>23</span></li>
                <li class="k-item" data-timelist-item-index="24"><span>24</span></li>
                <li class="k-item" data-timelist-item-index="25"><span>25</span></li>
                <li class="k-item" data-timelist-item-index="26"><span>26</span></li>
                <li class="k-item" data-timelist-item-index="27"><span>27</span></li>
                <li class="k-item" data-timelist-item-index="28"><span>28</span></li>
                <li class="k-item" data-timelist-item-index="29"><span>29</span></li>
                <li class="k-item" data-timelist-item-index="30"><span>30</span></li>
                <li class="k-item" data-timelist-item-index="31"><span>31</span></li>
                <li class="k-item" data-timelist-item-index="32"><span>32</span></li>
                <li class="k-item" data-timelist-item-index="33"><span>33</span></li>
                <li class="k-item" data-timelist-item-index="34"><span>34</span></li>
                <li class="k-item" data-timelist-item-index="35"><span>35</span></li>
                <li class="k-item" data-timelist-item-index="36"><span>36</span></li>
                <li class="k-item" data-timelist-item-index="37"><span>37</span></li>
                <li class="k-item" data-timelist-item-index="38"><span>38</span></li>
                <li class="k-item" data-timelist-item-index="39"><span>39</span></li>
                <li class="k-item" data-timelist-item-index="40"><span>40</span></li>
                <li class="k-item" data-timelist-item-index="41"><span>41</span></li>
                <li class="k-item" data-timelist-item-index="42"><span>42</span></li>
                <li class="k-item" data-timelist-item-index="43"><span>43</span></li>
                <li class="k-item" data-timelist-item-index="44"><span>44</span></li>
                <li class="k-item" data-timelist-item-index="45"><span>45</span></li>
                <li class="k-item" data-timelist-item-index="46"><span>46</span></li>
                <li class="k-item" data-timelist-item-index="47"><span>47</span></li>
                <li class="k-item" data-timelist-item-index="48"><span>48</span></li>
                <li class="k-item" data-timelist-item-index="49"><span>49</span></li>
                <li class="k-item" data-timelist-item-index="50"><span>50</span></li>
                <li class="k-item" data-timelist-item-index="51"><span>51</span></li>
                <li class="k-item" data-timelist-item-index="52"><span>52</span></li>
                <li class="k-item" data-timelist-item-index="53"><span>53</span></li>
                <li class="k-item" data-timelist-item-index="54"><span>54</span></li>
                <li class="k-item" data-timelist-item-index="55"><span>55</span></li>
                <li class="k-item" data-timelist-item-index="56"><span>56</span></li>
                <li class="k-item" data-timelist-item-index="57"><span>57</span></li>
                <li class="k-item" data-timelist-item-index="58"><span>58</span></li>
                <li class="k-item" data-timelist-item-index="59"><span>59</span></li>
              </ul>
              <div class="k-scrollable-placeholder" style="height: 0px;"></div>
            </div>
          </div>
        </div>
        <div class="k-time-separator"></div>
        <div class="k-time-list-wrapper" role="presentation" tabindex="-1">
          <span class="k-title">AM/PM</span>
          <div kendo-timelist data-timelist-index="4" tabindex="0" class="k-time-list">
            <div kendo-virtualization class="k-time-container k-content k-scrollable" role="presentation" tabindex="-1">
              <ul class="k-reset" style="transform: translateY(0px);">
                <li class="k-item" data-timelist-item-index="0"><span>AM</span></li>
                <li class="k-item" data-timelist-item-index="1"><span>PM</span></li>
              </ul>
              <div class="k-scrollable-placeholder" style="height: 0px;"></div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="k-time-footer k-action-buttons">-->
      <!--  <button class="k-button k-time-cancel" type="button" title="Cancel changes" aria-label="Cancel changes">Cancel</button>-->
      <!--  <button class="k-time-accept k-button k-primary" type="button" title="Set time" aria-label="Set time">Set</button>-->
      <!--</div>-->
    </div>
  </div>
</template>

<style>
  @import './datetime.scss';
</style>

<style scoped>
  .w-time-calendar {
    width: min-content;
  }
  .w-time-calendar .k-time-separator {
    width: 0;
  }
</style>
