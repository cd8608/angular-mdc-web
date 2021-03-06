import { Component, DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MdcLinearProgress, MdcLinearProgressModule } from '@angular-mdc/web';

describe('MdcLinearProgress', () => {
  let fixture: ComponentFixture<any>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdcLinearProgressModule],
      declarations: [
        SimpleTest,
      ]
    });
    TestBed.compileComponents();
  }));

  describe('basic behaviors', () => {
    let testDebugElement: DebugElement;
    let testNativeElement: HTMLElement;
    let testInstance: MdcLinearProgress;
    let testComponent: SimpleTest;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleTest);
      fixture.detectChanges();

      testDebugElement = fixture.debugElement.query(By.directive(MdcLinearProgress));
      testNativeElement = testDebugElement.nativeElement;
      testInstance = testDebugElement.componentInstance;
      testComponent = fixture.debugElement.componentInstance;
    });

    it('#should have mdc-linear-progress by default', () => {
      expect(testDebugElement.nativeElement.classList)
        .toContain('mdc-linear-progress', 'Expected to have mdc-linear-progress');
    });

    it('#should apply reversed class based on property', () => {
      testComponent.reversed = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-linear-progress--reversed')).toBe(true);
      expect(testInstance.reversed).toBe(true);
    });

    it('#should apply secondary class based on property', () => {
      testComponent.secondary = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-linear-progress--secondary')).toBe(true);
    });

    it('#should apply indeterminate class based on property', () => {
      testComponent.determinate = false;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-linear-progress--indeterminate')).toBe(true);
      expect(testInstance.determinate).toBe(false);
    });

    it('#should apply closed class based on property', () => {
      testComponent.closed = true;
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-linear-progress--closed')).toBe(true);
      expect(testInstance.closed).toBe(true);
    });

    it('#should set buffer to value', () => {
      testInstance.setBuffer(50);
      fixture.detectChanges();
      expect(testInstance.buffer).toBe(50);
    });

    it('#should set progress to value', () => {
      testInstance.setProgress(20);
      fixture.detectChanges();
      expect(testInstance.progress).toBe(20);
    });

    it('#should not apply indeterminate class', () => {
      testInstance.setDeterminate(true);
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-linear-progress--indeterminate')).toBe(false);
    });

    it('#should not apply reverse class', () => {
      testInstance.setReverse(true);
      fixture.detectChanges();
      expect(testDebugElement.nativeElement.classList.contains('mdc-linear-progress--reversed')).toBe(true);
      expect(testInstance.reversed).toBe(true);
    });

    it('#should be closed', () => {
      testInstance.close();
      fixture.detectChanges();
    });

    it('#should be open', () => {
      testInstance.open();
      fixture.detectChanges();
    });
  });
});

@Component({
  template: `
    <mdc-linear-progress
      [reversed]="reversed"
      [secondary]="secondary"
      [closed]="closed"
      [progress]="0.5"
      [buffer]="0.75"
      [determinate]="determinate">
    </mdc-linear-progress>
  `,
})
class SimpleTest {
  reversed: boolean = false;
  secondary: boolean = false;
  determinate: boolean = false;
  closed: boolean = false;
}
