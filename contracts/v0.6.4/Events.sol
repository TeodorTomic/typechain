pragma solidity ^0.6.4;
pragma experimental ABIEncoderV2;

contract Events {
  event Event1(uint256 indexed value1, uint256 value2);

  function emit_event1() public {
    emit Event1(1, 2);
  }

  // note: no names for args
  event Event2(uint256);

  // note: issue #575 reproduction
  event UpdateFrequencySet(address[], uint256[]);

  function emit_event2() public {
    emit Event2(1);
  }

  event AnonEvent1(uint256 indexed value1) anonymous;

  function emit_anon1() public {
    emit AnonEvent1(1);
  }

  event Event3(bool indexed value1, uint256 value2);
  event Event3(uint256 indexed value1);

  function emit_event3() public {
    emit Event3(true, 2);
  }

  function emit_event3_overloaded() public {
    emit Event3(1);
  }

  struct EventData {
    uint256 index;
    string name;
  }
  event Event4(EventData data);

  function emit_event4() public {
    emit Event4(EventData(2, "test"));
  }

  event NoArgsEvent();
}
